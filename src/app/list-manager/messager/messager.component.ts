import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbMenuItem, NbToastrService } from '@nebular/theme';
import { SmsService } from '../service/sms-service';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { ReceivedHistory } from '../models/history';
import { Sms } from '../models/sms';
import { ActivatedRoute, Router } from '@angular/router';
import { RedirectService } from 'src/app/auth/services/redirect.service';
import { PermissionService } from '../service/permission-service';
import { Field } from '../models/field';
import { UserInfoService } from 'src/app/auth/services/user-info.service';
import { StudentInfoService } from '../service/student-info-service';
import { EmailService } from '../service/email-service';


@Component({
  selector: 'app-template',
  templateUrl: './messager.component.html',
  styleUrls: ['./messager.component.less']
})
export class MessagerComponent implements OnInit {

  studentId: string;
  userName: string;
  user = {};
  history: ReceivedHistory;
  isSendingSms = true;
  isInfoUser = true;
  isRegistered = false;
  isCanSms = false;
  fields: Field[];
  isSmsSendLoading = false;
  newUserEmail: string = "";

  constructor(private route: ActivatedRoute,
    private sidebarService: NbSidebarService,
    private smsService: SmsService,
    private authService: NbAuthService,
    private redirectService: RedirectService,
    private permissionService: PermissionService,
    private router: Router,
    private userInfoService: UserInfoService,
    private studentInfoService: StudentInfoService,
    private emailService: EmailService,
    private toastrService: NbToastrService
  ) { }

  ngOnInit() {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthSimpleToken) => {
        if (token.isValid()) {
          this.user = token;
          this.permissionService.getOwnPermission(token).subscribe(data => {

            if (data.permissions.find(x => x.permissionName == "CanSendSmsMessagesToStudents")) {
              this.route.params.subscribe(dataFromList => {
                this.studentId = dataFromList.studentId;
                this.smsService.getSms(token, this.studentId).subscribe(data => {
                  this.history = data;
                })
              })
            }
            else {
              this.isSendingSms = false;
              this.redirectService.redirectToNoAccess(this.router);
            }

            //if (data.permissions.find(x=> x.permissionName == ""))

            this.studentInfoService.getStudentInfo(this.user, parseInt(this.studentId)).subscribe(data => {
              console.log(data);
              this.isRegistered = data.isRegistered;
              this.userInfoService.getUserFields(this.user, data.account).subscribe(data => {
                this.fields = data; 
              })
            })

          })
        }
      });
  }

  sendMessage(event) {

    this.smsService.SendMessage(this.user, this.studentId, event.message).subscribe(data => {
      this.history.messages.push(new Sms(event.message, new Date(), '1'))
    }
    )
  }

  sendInvite(event) {
    this.isSmsSendLoading = true;
    this.emailService.inviteStudent(this.user, this.newUserEmail, parseInt(this.studentId)).subscribe(data => {
      this.isSmsSendLoading = false;
      this.showToast('top-right', 'Ваше приглашение отправлено');
    })
  }

  showToast(position, message) {
    this.toastrService.show(message, 'Готово!', { position });
  }
}

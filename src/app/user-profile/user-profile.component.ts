import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { UserInfoService } from '../auth/services/user-info.service';
import { User } from '../list-manager/models/user';
import { RoleForUser } from '../list-manager/models/role-for-user.request';
import { Field } from '../list-manager/models/field';
import { EmailService } from '../list-manager/service/email-service';
import { NbToastrService } from '@nebular/theme';
import { SmsService } from '../list-manager/service/sms-service';
import { PermissionService } from '../list-manager/service/permission-service';


@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnInit {

  isCanEmail = false;
  isCanSms = false;
  isEmailOpened = false;
  isSmsOpened = false
  isEmailSending = false;
  isSmsSending = false;
  subject: string = "";
  textEmail: string = "";
  textSms: string = "";
  username: string;
  token: any;
  user: User;
  fields: Field[];
  isCredsLoading = false;
  isCurrentUser = false;

  constructor(private route: ActivatedRoute,
    private authService: NbAuthService,
    private userInfoService: UserInfoService,
    private mailService: EmailService,
    private toastrService: NbToastrService,
    private smsService: SmsService, 
    private permService: PermissionService,) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthSimpleToken) => {
        if (token.isValid()) {
          this.token = token;
        }
      });
  }

  ngOnInit() {
    this.isCredsLoading = true;
    this.route.params.subscribe(data => {

      this.permService.getOwnPermission(this.token).subscribe(data => {
        if (data.permissions.find(x => x.permissionName == "CanSendEmails")) {
          this.isCanEmail = true;
        }
        if (data.permissions.find(x => x.permissionName == "CanSendSmsMessagesToStudents")) {
          this.isCanSms = true;
        }
      });

      this.username = data.username;
      this.userInfoService.getUser(this.token).subscribe(data => {
        console.log(data);
        if (data.Username == this.username) {
          this.userInfoService.getCurrentUserFields(this.token).subscribe(fields => {
            this.fields = fields;
            this.isCredsLoading = false;
            this.isCurrentUser = true;
          })
        }
        else {
          this.userInfoService.getUserFields(this.token, this.username).subscribe(fields => {
            this.fields = fields;
            this.isCredsLoading = false;
            this.isCurrentUser = false;
          })
        }
      })

      this.userInfoService.getAnotherUserInfo(this.token, this.username).subscribe(data => {
        this.user = data;
      })
    });
  }

  applyChanges(event) {
    this.userInfoService.applyUserFields(this.token, this.fields).subscribe(data => {

    })
  }

  changeEmailFormStatement(event) {
    this.isEmailOpened = !this.isEmailOpened;
  }

  changeSmsFormStatement(event) {
    this.isSmsOpened = !this.isSmsOpened;
  }

  sendEmail(event) {
    this.isEmailSending = true;
    this.mailService.sendEmail(this.token, this.user.Username, this.subject, this.textEmail).subscribe(data => {
      this.isEmailSending = false;
      this.showToast('top-left', 'Ваш Email отправлен')
    })
  }

  sendSms(event) {
    this.isSmsSending = true;
    this.smsService.sendSmsStandAlone(this.token, this.user.PhoneNumber, this.textSms).subscribe(data => {
      this.isSmsSending = false;
      this.showToast('top-right', 'Ваше SMS отправлено')
    })
  }

  showToast(position, message) {
    this.toastrService.show(message, 'Готово!', { position });
  }

}
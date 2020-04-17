import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbMenuItem } from '@nebular/theme';
import { SmsService } from '../service/sms-service';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { ReceivedHistory } from '../models/history';
import { Sms } from '../models/sms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-template',
  templateUrl: './messager.component.html',
  styleUrls: ['./messager.component.less']
})
export class MessagerComponent implements OnInit {

  studentId:string;
  userName: string;
  user={};
  history:ReceivedHistory;

  constructor(private route: ActivatedRoute, private sidebarService: NbSidebarService, private smsService : SmsService, private authService: NbAuthService
    ) { }

  ngOnInit() {
    this.authService.onTokenChange()
        .subscribe((token: NbAuthSimpleToken) => {
          if (token.isValid()) {
            //console.log(this.studentId);
            this.user = token;
            this.route.params.subscribe(dataFromList => {
              this.studentId = dataFromList.studentId;
              this.smsService.getSms(token, this.studentId).subscribe(data => {
                this.history = data;
                console.log(data);
              })  
            })
            
          }
        }); 
    this.userName="hello";
  }

  sendMessage(event)
  {
    
    this.smsService.SendMessage(this.user, this.studentId, event.message).subscribe(data => {
      this.history.messages.push(new Sms(event.message, new Date(), '1'))
}
    )
  }
}

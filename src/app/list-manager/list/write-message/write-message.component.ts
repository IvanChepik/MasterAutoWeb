import { Component, OnInit, Input } from '@angular/core';
import { SmsService } from '../../service/sms-service';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';


@Component({
  selector: 'write-message-compo',
  templateUrl: './write-message.component.html',
  styleUrls: ['./write-message.component.less']
})
export class WriteMessageComponent implements OnInit {

    @Input() studentLists: any;
    message:string = "";
    token:any;

    constructor(private smsService:SmsService,
                private authService:NbAuthService)
    {
      this.authService.onTokenChange()
        .subscribe((token: NbAuthSimpleToken) => {
          if (token.isValid()) {
            this.token = token;  
         }
  
        }); 
    }

    ngOnInit(){
        
    }

    sendMessageMultiply(event){

      var studentListIds = this.studentLists.map(element => {
        return element.studentId;
      })

      this.smsService.sendSmsMessageMultiply(this.token, studentListIds, this.message).subscribe(data => {

      })
    }

}
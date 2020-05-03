import { Component, OnInit, Input } from '@angular/core';
import { SmsService } from '../../service/sms-service';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { NbToastrService } from '@nebular/theme';


@Component({
  selector: 'write-message-compo',
  templateUrl: './write-message.component.html',
  styleUrls: ['./write-message.component.less']
})
export class WriteMessageComponent implements OnInit {

    loading = false;
    @Input() studentLists: any;
    message:string = "";
    token:any;

    constructor(private smsService:SmsService,
                private authService:NbAuthService, 
                private toastrService: NbToastrService)
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
      this.loading = true;
      var studentListIds = this.studentLists.map(element => {
        return element.studentId;
      })

      this.smsService.sendSmsMessageMultiply(this.token, studentListIds, this.message).subscribe(data => {
        this.loading = false;
        this.showToast('top-right', 'Ваше сообщение отправлено')
      })
    }

    showToast(position, message) {
      this.toastrService.show(message, 'Готово!', { position });
    }

}
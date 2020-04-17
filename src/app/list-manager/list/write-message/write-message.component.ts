import { Component, OnInit, Input } from '@angular/core';
import { SmsService } from '../../service/sms-service';


@Component({
  selector: 'write-message-compo',
  templateUrl: './write-message.component.html',
  styleUrls: ['./write-message.component.less']
})
export class WriteMessageComponent implements OnInit {

    @Input() studentListIds: string[];

    constructor(private sendSmsService:SmsService)
    {

    }

    ngOnInit(){
        
    }

}
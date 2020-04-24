import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../../service/role-service';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { InfoService } from '../../service/info-service';


@Component({
    selector: 'invite-users',
    templateUrl: './invite-users-model.html',
    styleUrls: ['./invite-users-model.less']
  })
export class InviteUserComponent implements OnInit{
  
    emailToInvite:string = "";

    token:any;

    constructor(private router:Router, 
        private roleService:RoleService,
        private authService:NbAuthService,
        private infoService:InfoService
        )
    {
        this.authService.onTokenChange()
        .subscribe((token: NbAuthSimpleToken) => {
          if (token.isValid()) {
            this.token = token;  
          }
        }); 
    }

    ngOnInit(){
        this.roleService.getRoles(this.token).subscribe(data => {
            console.log(data);
        })
    }

    sendInviteEmail(event){
      this.infoService.sendRegistrationRequest(this.token, this.emailToInvite).subscribe(data => {

      })
    }
}
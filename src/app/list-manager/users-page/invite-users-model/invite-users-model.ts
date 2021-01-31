import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../../service/role-service';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { EmailService } from '../../service/email-service';
import { Role } from '../../models/role';
import { RoleGetRequest } from '../../models/role-get.request';
import { NbToastrService } from '@nebular/theme';


@Component({
    selector: 'invite-users',
    templateUrl: './invite-users-model.html',
    styleUrls: ['./invite-users-model.less']
  })
export class InviteUserComponent implements OnInit{
  
    emailToInvite:string = "";
    firstNameToInvite:string="";
    lastNameToInvite:string="";
    phoneNumberToInvite:string="";
    roleIdToInvite:number;

    allRoles:RoleGetRequest;
    loading = false;
    token:any;

    constructor(private router:Router, 
        private roleService:RoleService,
        private authService:NbAuthService,
        private emailService:EmailService,
        private toastrService: NbToastrService
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
      this.loading = true;
        this.roleService.getRoles(this.token).subscribe(data => {
            this.allRoles = data;
            this.loading = false;
        })
    }

    sendInviteEmail(event){
      this.loading = true;
      this.emailService.inviteUser(this.token, 
        this.emailToInvite, 
        this.firstNameToInvite,
        this.lastNameToInvite,
        this.phoneNumberToInvite,
        this.roleIdToInvite).subscribe(data => {
          this.loading = false;
          this.showToast('top-right', 'Ваше приглашение отправлено')
        })
    }

    showToast(position, message) {
      this.toastrService.show(message, 'Готово!', { position });
    }
}
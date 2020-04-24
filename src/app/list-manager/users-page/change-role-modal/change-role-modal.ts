import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../../service/role-service';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';


@Component({
    selector: 'change-role-modal',
    templateUrl: './change-role-modal.html',
    styleUrls: ['./change-role-modal.less']
  })
export class ChangeRoleModalComponent implements OnInit{
  
    email:string;

    token:any;

    constructor(private router:Router, 
        private roleService:RoleService,
        private authService:NbAuthService
        )
    {
        this.authService.onTokenChange()
        .subscribe((token: NbAuthSimpleToken) => {
          if (token.isValid()) {
            this.token = token;  
          }
        }); 
    }

    ngOnInit()
    {
        
    }
}
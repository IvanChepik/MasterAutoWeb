import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../../service/role-service';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { RoleForUser } from '../../models/role-for-user.request';
import { RoleGetRequest } from '../../models/role-get.request';
import { PermissionService } from '../../service/permission-service';
import { NbDialogRef } from '@nebular/theme';


@Component({
    selector: 'change-role-modal',
    templateUrl: './change-role-modal.html',
    styleUrls: ['./change-role-modal.less']
  })
export class ChangeRoleModalComponent implements OnInit{
  
    userRole:RoleForUser;
    allRoles:RoleGetRequest;
    roleId:number;
    token:any;
    loading = false;
    email:string;

    constructor(private router:Router, 
        private roleService:RoleService,
        private authService:NbAuthService, 
        private permissionService:PermissionService,
        protected dialogRef: NbDialogRef<any>
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
      this.loading = true;
      this.roleId = this.userRole.roleId;
        this.roleService.getRoles(this.token).subscribe(data => {
          this.allRoles = data;
          this.loading = false;
        })
    }

    editRole(event){

      this.loading = true;
      this.permissionService.giveRoleToUser(this.token, this.email, this.roleId).subscribe(data => {
        this.loading = false;
        this.dialogRef.close(true);
        
      });
    }
}
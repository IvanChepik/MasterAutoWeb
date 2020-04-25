import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthSimpleToken, NbAuthService } from '@nebular/auth';
import { RoleService } from '../service/role-service';
import { PermissionService } from '../service/permission-service';
import { User } from '../models/user';
import { ChangeRoleModalComponent } from './change-role-modal/change-role-modal';
import { NbDialogService } from '@nebular/theme';


@Component({
    selector: 'users-page',
    templateUrl: './users-page.html',
    styleUrls: ['./users-page.less']
  })
export class UsersPageComponent implements OnInit{
  
  token:any;
  users:User[];
  loading = false;

  constructor(private router:Router,
    private authService:NbAuthService, 
    private roleService:RoleService,
    private permService:PermissionService, 
    private dialogService:NbDialogService)
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
    this.permService.getUsers(this.token).subscribe(data => {
      this.users = data;
      this.loading = false;
    })
  }

  openChangeRoleModal(event, email:string)
  {
    const dialogRef = this.dialogService.open(ChangeRoleModalComponent, {context: { email:email}});
  }

}
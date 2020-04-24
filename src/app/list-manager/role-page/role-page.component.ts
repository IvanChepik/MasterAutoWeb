import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../service/role-service';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { Role } from '../models/role';
import { NbDialogService } from '@nebular/theme';
import { PermissionControlDialog } from './permission-control-dialog/permission-control-dialog';


@Component({
    selector: 'app-role-page',
    templateUrl: './role-page.component.html',
    styleUrls: ['./role-page.component.less']
  })
export class RolePageComponent implements OnInit{
  
  token:any;

  avaibleRoles:Role[] = [];

  constructor(private router:Router, 
    private roleService:RoleService, 
    private authService: NbAuthService,
    private dialogService:NbDialogService)
  {

  }

  ngOnInit()
  {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthSimpleToken) => {
        this.token = token;
        this.roleService.getRoles(token).subscribe(data => {
            this.avaibleRoles = data.roles;
            console.log(this.avaibleRoles);
        })
      });
    
  }

  openControlPermission(event, roleId:number, roleName:string){
    const dialogRef = this.dialogService.open(PermissionControlDialog, {context: { roleId: roleId, roleName:roleName}});
  }


}
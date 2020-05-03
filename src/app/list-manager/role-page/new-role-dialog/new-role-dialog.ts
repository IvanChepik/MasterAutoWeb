import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { RoleService } from '../../service/role-service';
import { PermissionService } from '../../service/permission-service';
import { Permission } from '../../models/permission';
import { NbDialogRef } from '@nebular/theme';


@Component({
    selector: 'new-role-dialog',
    templateUrl: './new-role-dialog.html',
    styleUrls: ['./new-role-dialog.less']
  })
export class NewRoleDialog implements OnInit{
  
  token:any;
  permissions:Permission[];
  loading = false;
  roleName:string = "Новая роль";


  constructor(private router:Router,
     private authService: NbAuthService,
     private roleService: RoleService,
     private permissionService:PermissionService,
     protected dialogRef: NbDialogRef<any>)
  {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthSimpleToken) => {
        this.token = token;
      });
  }

  ngOnInit()
  {
    this.loading =  true;
    this.permissionService.getPermissions(this.token).subscribe(data => {
        this.permissions = data;
        this.loading = false;
    })    
  }

  createNewRole(event){
    this.loading = true;
    var permissionNames = this.permissions
                          .filter(permission => {
                            return permission.isChecked
                          })
                          .map(permission => {
                            return permission.permissionName
                          });

    this.roleService.addRole(this.roleName, permissionNames, this.token).subscribe(data => {
      this.loading = false;
      this.dialogRef.close(true);
    })
  }



}
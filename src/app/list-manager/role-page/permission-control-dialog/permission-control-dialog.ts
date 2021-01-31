import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { RoleService } from '../../service/role-service';
import { PermissionService } from '../../service/permission-service';
import { Permission } from '../../models/permission';



@Component({
    selector: 'permission-control-dialog',
    templateUrl: './permission-control-dialog.html',
    styleUrls: ['./permission-control-dialog.less']
  })
export class PermissionControlDialog implements OnInit{
  
  token:any;
  roleId:number;
  roleName:string;
  allPermissions:Permission[];
  rolePemissions:string[];
  isEditable:boolean = false;
  loading=false;

  constructor(private router:Router,
     private authService: NbAuthService,
     private roleService: RoleService,
     private permissionService:PermissionService)
  {

  }

  ngOnInit()
  {
    this.loading = true;
    this.authService.onTokenChange()
      .subscribe((token: NbAuthSimpleToken) => {
        this.token = token;
        this.permissionService.getPermissions(token).subscribe(data => {
            this.allPermissions = data.permissions;
            this.roleService.getRoleInfo(token, this.roleId.toString()).subscribe(data => {
              console.log(data);
              this.rolePemissions = data.permissions.map(permission => {
                return permission.permissionName;
              });
              this.definedPermissionsOnCheckBoxes(this.rolePemissions);
              this.loading = false;
          })
        })

      });
    
  }

  definedPermissionsOnCheckBoxes(userPemissions:string[]){
    console.log(userPemissions)
    console.log(this.allPermissions);
    this.allPermissions.forEach(permission => {
      if (userPemissions.indexOf(permission.permissionName) > -1){
        permission.isChecked = true;
      }
    });
  }
  
  changeEditableState($event){
    this.isEditable = !this.isEditable;
  }

  applyPermissionsChange($event){

    this.loading = true;

    var newRolePermissions = this.allPermissions.filter(permission => {
      return (permission.isChecked);
    }).map(permission => {
      return (permission.permissionName);
    })


    this.roleService.editRole(this.token, this.roleId.toString(), this.roleName, newRolePermissions)
    .subscribe(data => {
      this.changeEditableState(event);
      this.loading = false;
    })
  }


}
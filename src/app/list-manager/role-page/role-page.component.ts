import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../service/role-service';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { Role } from '../models/role';
import { NbDialogService } from '@nebular/theme';
import { PermissionControlDialog } from './permission-control-dialog/permission-control-dialog';
import { NewRoleDialog } from './new-role-dialog/new-role-dialog';
import { FieldsDialog } from './fields-dialog/fields-dialog';
import { RedirectService } from 'src/app/auth/services/redirect.service';
import { PermissionService } from '../service/permission-service';


@Component({
    selector: 'app-role-page',
    templateUrl: './role-page.component.html',
    styleUrls: ['./role-page.component.less']
  })
export class RolePageComponent implements OnInit{
  
  token:any;
  loading = false;
  avaibleRoles:Role[] = [];

  constructor(private router:Router, 
    private roleService:RoleService, 
    private authService: NbAuthService,
    private dialogService:NbDialogService,
    private redirectSerivce:RedirectService,
    private permissionService:PermissionService)
  {

  }

  ngOnInit()
  {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthSimpleToken) => {
        this.token = token;

        this.permissionService.getOwnPermission(token).subscribe(data => {
          if(data.permissions.find(x => x.permissionName == "PermissionServiceAccess"))
              {
                this.loading = true;
                this.roleService.getRoles(token).subscribe(data => {
                    this.avaibleRoles = data.roles;
                    this.loading = false;
                    console.log(this.avaibleRoles);
                })
                
              }
          else{
            this.redirectSerivce.redirectToNoAccess(this.router);
          }
        })

        //
        

        //

      });
    
  }

  openControlPermission(event, roleId:number, roleName:string){
    const dialogRef = this.dialogService.open(PermissionControlDialog, {context: { roleId: roleId, roleName:roleName}});
  }

  openNewRoleDialog(event){
    const dialogRef = this.dialogService.open(NewRoleDialog).onClose.subscribe(isAdded => {

      if (isAdded){
        this.loading = true;
        this.roleService.getRoles(this.token).subscribe(data => {
            this.avaibleRoles = data.roles;
            this.loading = false;
            console.log(this.avaibleRoles);
        })
      }
    });
  }

  openFieldDialog(event, roleId:number){
    const dialogRef = this.dialogService.open(FieldsDialog, {context: { roleId:roleId}});
  }

  deleteRole(event, roleId:number){
    this.loading = true;
    this.roleService.deleteRole(this.token, roleId.toString()).subscribe(data => {
      this.loading = false;
      this.roleService.getRoles(this.token).subscribe(data => {
        this.avaibleRoles = data.roles;
        this.loading = false;
        console.log(this.avaibleRoles);
    })
    })
  }


}
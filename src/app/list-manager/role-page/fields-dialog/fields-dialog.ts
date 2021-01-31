import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { RoleService } from '../../service/role-service';
import { UserInfoService } from 'src/app/auth/services/user-info.service';
import { RoleGetRequest } from '../../models/role-get.request';
import { PermissionService } from '../../service/permission-service';
import { FieldGet } from '../../models/field.get';


@Component({
  selector: 'fields-dialog',
  templateUrl: './fields-dialog.html',
  styleUrls: ['./fields-dialog.less']
})
export class FieldsDialog implements OnInit {

  token: any;
  roleId: number;
  fieldGet: FieldGet[];
  newFieldName: string;
  rolesToVisible: number[];
  roles: RoleGetRequest;
  isLoading = false;
  isRolesLoading = true;

  constructor(private router: Router,
    private authService: NbAuthService,
    private roleService: RoleService,
    private permissionService: PermissionService,
    protected dialogRef: NbDialogRef<any>,
    private userInfoService: UserInfoService,
    private toastrService: NbToastrService) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthSimpleToken) => {
        this.token = token;
      });
  }

  ngOnInit() {
    this.isLoading = true;
    this.isRolesLoading = true;

    this.roleService.getRoles(this.token).subscribe(data => {
      this.roles = data;
      this.isRolesLoading = false;
    });
    this.roleService.getFields(this.token, this.roleId).subscribe(data => {
      this.fieldGet = data;
      this.isLoading = false;
    })
  }

  addFieldToRole(event) {
    this.isLoading = true;

    var rolesToVisibleId = this.roles.roles.filter(role => {
      return role.isChecked;
    }).map(role => {
      return role.roleId;
    })

    this.roleService.addField(this.token, this.roleId, this.newFieldName, rolesToVisibleId).subscribe(data => {
      this.roleService.getFields(this.token, this.roleId).subscribe(data => {
        this.fieldGet = data;
        this.isLoading = false;
      })
    });
  }

  deleteFieldFromRole(event, fieldName: string) {

    this.isLoading = true;
    this.roleService.deleteField(this.token, this.roleId, fieldName).subscribe(data => {
      this.roleService.getFields(this.token, this.roleId).subscribe(data => {
        this.fieldGet = data;
        this.isLoading = false;
      })
    }, (error) => {
      this.isLoading = false;
      this.toastrService.show("Что-то пошло не так!", "Упс!", { status: 'danger' });
    })
  }


}
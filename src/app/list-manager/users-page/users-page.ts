import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthSimpleToken, NbAuthService } from '@nebular/auth';
import { RoleService } from '../service/role-service';
import { PermissionService } from '../service/permission-service';
import { User } from '../models/user';
import { ChangeRoleModalComponent } from './change-role-modal/change-role-modal';
import { NbDialogService } from '@nebular/theme';
import { RoleForUser } from '../models/role-for-user.request';
import { UserInfoService } from 'src/app/auth/services/user-info.service';
import { RedirectService } from 'src/app/auth/services/redirect.service';
import { ModelForExport } from '../models/model-for-export';
import { ExportService } from '../service/export-service';


@Component({
  selector: 'users-page',
  templateUrl: './users-page.html',
  styleUrls: ['./users-page.less']
})
export class UsersPageComponent implements OnInit {

  token: any;
  users: User[];
  loading = false;

  isRoles = false;
  isInvite = false;
  isCanDelete = false;
  isExport = false;

  constructor(private router: Router,
    private authService: NbAuthService,
    private roleService: RoleService,
    private permService: PermissionService,
    private dialogService: NbDialogService,
    private userInfoService: UserInfoService,
    private redirectSerice: RedirectService,
    private exportService: ExportService,
  ) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthSimpleToken) => {
        if (token.isValid()) {
          this.token = token;
        }
      });
  }

  ngOnInit() {
    this.permService.getOwnPermission(this.token).subscribe(data => {
      if (data.permissions.find(x => x.permissionName == "CanInviteUsers")) {
        this.isInvite = true;
      }
      if (data.permissions.find(x => x.permissionName == "PermissionServiceAccess")) {
        this.isRoles = true;
      }
      if (data.permissions.find(x => x.permissionName == "CanDeleteUsers")) {
        this.isCanDelete = true;
      }
      if (data.permissions.find(x => x.permissionName == "DownloadStudentsList")) {
        this.isExport = true;
      }

      this.loading = true;
        this.userInfoService.getUsers(this.token).subscribe(data => {
          this.users = data;
          this.loading = false;
          console.log(data);
        })

    });
  }

  openChangeRoleModal(event, user: User) {

    const dialogRef = this.dialogService.open(ChangeRoleModalComponent, {
      context:
      {
        userRole: user.Role,
        email: user.Username
      }
    }).onClose.subscribe(isChanged => {
      this.loading = true;
      this.userInfoService.getUsers(this.token).subscribe(data => {
        this.users = data;
        this.loading = false;
        console.log(data);
      })
    });
  }

  openUserInfo(event, userName: string) {
    this.router.navigateByUrl("user-profile/" + userName)
  }

  exportStudentsToExcel(event) {

    var students = this.users.filter(user => {
      if (user.Role.roleId === 2){
        return true;
      }
    });

    var studentsForExport = students.map(student => {
      return new ModelForExport(student.FirstName+ " " + student.LastName, student.Fields);
    })

    this.exportService.exportUsersToExcel(studentsForExport);
  }

  deleteUser(event, userName: string){
    this.loading = true;
    this.userInfoService.deleteUser(this.token, userName).subscribe(data => {
      this.userInfoService.getUsers(this.token).subscribe(users => {
        this.users = users;
        this.loading = false;
      })
    })
  }

}
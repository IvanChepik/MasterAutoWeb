import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { UserInfoService } from '../auth/services/user-info.service';
import { User } from '../list-manager/models/user';
import { RoleForUser } from '../list-manager/models/role-for-user.request';
import { Field } from '../list-manager/models/field';


@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnInit {

  username: string;
  token: any;
  user: User;
  fields: Field[];
  isCredsLoading = false;
  isCurrentUser = false;

  constructor(private route: ActivatedRoute,
    private authService: NbAuthService,
    private userInfoService: UserInfoService) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthSimpleToken) => {
        if (token.isValid()) {
          this.token = token;
        }
      });
  }

  ngOnInit() {
    this.isCredsLoading = true;
    this.route.params.subscribe(data => {
      this.username = data.username;
      this.userInfoService.getUser(this.token).subscribe(data => {
        if (data.Username == this.username) {
          this.userInfoService.getCurrentUserFields(this.token).subscribe(fields => {
            this.fields = fields;
            this.isCredsLoading = false;
            this.isCurrentUser = true;
          })
        }
        else {
          this.userInfoService.getUserFields(this.token, this.username).subscribe(fields => {
            this.fields = fields;
            this.isCredsLoading = false;
            this.isCurrentUser = false;
          })
        }
      })

      this.userInfoService.getAnotherUserInfo(this.token, this.username).subscribe(data => {
        this.user = data;
      })
    });
  }

  applyChanges(event){
    this.userInfoService.applyUserFields(this.token, this.fields).subscribe(data => {
      
    })
  }


}
import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbMenuItem } from '@nebular/theme';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { AccountService } from 'src/app/auth/services/account.service';
import { UserInfoService } from 'src/app/auth/services/user-info.service';
import { StudentInfoService } from '../service/student-info-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.less']
})
export class SharedComponent implements OnInit {

  token: any;
  email:string;
  userName: string;
  items: NbMenuItem[] = [
    {
      title: "Списки",
      icon: "home-outline",
      link: "/action-lists"
    },
    {
      title: "Создание списка",
      icon: "download-outline",
      link: "/action-lists/new-list"
    },
    {
      title: "Роли",
      icon: "shield-outline",
      link: "/action-lists/roles"
    },
    {
      title: "Пользователи",
      icon: "people-outline",
      link: "/action-lists/all-users"
    }
  ]
  constructor(private sidebarService: NbSidebarService,
    private authService: NbAuthService,
    private accountService: AccountService,
    private userInfoService: UserInfoService,
    private studentInfoService:StudentInfoService, 
    private router:Router
  ) { }

  ngOnInit() {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthSimpleToken) => {
        if (token.isValid()) {
          this.token = token;
          this.userInfoService.getUser(token).subscribe(userData => {
            this.userName = userData.FirstName;
            console.log(userData)
            this.email = userData.Username;
          })
        }
      });
  }

  toggle() {
    if (this.items.every(x => x.title == "")) {
      this.items = [
        {
          title: "Списки",
          icon: "home-outline",
          link: "/action-lists"
        },
        {
          title: "Создание списка",
          icon: "download-outline",
          link: "/action-lists/new-list"
        },
        {
          title: "Роли",
          icon: "shield-outline",
          link: "/action-lists/roles"
        },
        {
          title: "Пользователи",
          icon: "people-outline",
          link: "/action-lists/all-users"
        }
      ]
    }
    else {
      this.items.map(x => x.title = "");
    }
    this.sidebarService.toggle(true, 'left');
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
  }

  goToUserProfile(event){
    console.log("hello");
    this.router.navigateByUrl("user-profile/" + this.email)
  }

  logOut(evevent){
    this.router.navigateByUrl("auth/logout");
  }
}

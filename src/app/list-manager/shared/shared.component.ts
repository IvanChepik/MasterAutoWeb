import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbMenuItem } from '@nebular/theme';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { AccountService } from 'src/app/auth/services/account.service';


@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.less']
})
export class SharedComponent implements OnInit {

  token:any;
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
              private accountService:AccountService
    ) { }

  ngOnInit() {
    this.authService.onTokenChange()
            .subscribe((token: NbAuthSimpleToken) => {
                if (token.isValid()) {
                    this.token = token;
                    this.accountService.getUser(token).subscribe(userData => {
                        this.userName = userData.FirstName;
                        console.log(userData)
                        
                    })
                }
            });
  }

  toggle() {
    if(this.items.every(x=>x.title == "")){
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
      this.items.map(x=>x.title = "");
    }
    this.sidebarService.toggle(true, 'left');
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
  }
}

import { Component, OnInit } from '@angular/core';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header-auth',
    templateUrl: './header-auth.component.html',
    styleUrls: ['./header-auth.component.less']
  
  })
  export class HeaderAuthComponent implements OnInit {
        
        user={};
        userName;
        userTitle;
        token:NbAuthSimpleToken;

        constructor(private authService:NbAuthService, private accountService:AccountService, private router:Router)
        {  
            this.authService.onTokenChange()
            .subscribe((token: NbAuthSimpleToken) => {
                if (token.isValid()) {
                    this.token = token;
                    this.accountService.getUser(token).subscribe(userData => {
                        this.user = userData;
                        this.userName = userData.FirstName;
                        this.userTitle = userData.LastName;
                        console.log(userData)
                        
                    })
                }
            });
        }
        
        goToRegister()
        {
            this.router.navigateByUrl("/auth/register");
        }

        goToLogin()
        {
            this.router.navigateByUrl("/auth/login");
        }

        isAuth() : boolean
        {
            var isAuth:boolean;

           this.authService.isAuthenticated().subscribe(result => {
                isAuth = result;
           });

           return isAuth;

        }

        logOut()
        {
            this.router.navigateByUrl("/auth/logout");
        }

        ngOnInit(){
           
        }
  }
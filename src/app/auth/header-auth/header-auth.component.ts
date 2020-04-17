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
        userName:string="hello";
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
            if (typeof this.token==='undefined')
            {
                console.log("hello");
                return false
                
            }
            if (this.token.isValid())
            {   
                console.log("hello");
                return true;
            }
            else {
                return false;
            }
        }

        logOut()
        {
            console.log(this.token);
            this.accountService.logOut(this.token).subscribe(data => 
                {
                    console.log(data);
                    this.authService.onTokenChange()
                .subscribe((token: NbAuthSimpleToken) => {
                if (token.isValid()) {
                    this.token = token;
                    this.accountService.getUser(token).subscribe(userData => {
                        console.log(userData);
                        
                    })
                }

            });
                })
        }

        ngOnInit(){
        
        }
  }
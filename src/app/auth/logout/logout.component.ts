import { Component, Inject, ChangeDetectorRef, OnInit } from '@angular/core';
import { NbLoginComponent, NbAuthSimpleToken, NbAuthService, NB_AUTH_OPTIONS, NbLogoutComponent } from '@nebular/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-logout',
  templateUrl: './logOut.component.html',
})
export class NgxLogOutComponent extends NbLogoutComponent implements OnInit {


  constructor(private authService: NbAuthService, protected router: Router, @Inject(NB_AUTH_OPTIONS) protected options = {}, protected cd: ChangeDetectorRef ) {
    super(authService, options, router);
    this.authService.onTokenChange()
      .subscribe((token: NbAuthSimpleToken) => {
        //if (token.isValid()) {
        //  //this.user = token;  
       // }
      });
  }

  ngOnInit(){
      super.ngOnInit();
  }

}
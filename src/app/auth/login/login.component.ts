import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { NbLoginComponent, NbAuthSimpleToken, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-register',
  templateUrl: './login.component.html',
})
export class NgxLoginComponent extends NbLoginComponent {
  user={};
  

  constructor(private authService: NbAuthService, protected router: Router, @Inject(NB_AUTH_OPTIONS) protected options = {}, protected cd: ChangeDetectorRef ) {
    super(authService, options, cd, router);
    this.authService.onTokenChange()
      .subscribe((token: NbAuthSimpleToken) => {
        if (token.isValid()) {
          this.user = token;  
        }

      });
  }

}
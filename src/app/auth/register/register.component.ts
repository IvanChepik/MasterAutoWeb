import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { NbRegisterComponent, NB_AUTH_OPTIONS, NbAuthService } from '@nebular/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../services/account.service';
import { UserInfoRegistration } from 'src/app/list-manager/models/user-info-reg';
import { UserRegistrationRequest } from 'src/app/list-manager/models/user-registration-reguest';
import { RedirectService } from '../services/redirect.service';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
})
export class NgxRegisterComponent extends NbRegisterComponent implements OnInit {

  user: UserRegistrationRequest;


  constructor(protected authService: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) options: {},
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private route: ActivatedRoute,
    private redirectService: RedirectService,
    private accountService: AccountService) {
    super(authService, options, cd, router);
  }

  secureHandle: string;

  ngOnInit() {
    this.route.queryParams.subscribe((queryParam: any) => {
      this.accountService.checkSecureHandle(queryParam['secureHandle']).subscribe((res) => {
        console.log(res);

        this.secureHandle = queryParam['secureHandle'];
        this.accountService.preregistrationStep(queryParam['secureHandle']).subscribe(data => {
          this.user.firstName = data.firstName;
          this.user.lastName = data.lastName;
          this.user.email = data.email;
          this.user.phoneNumber = data.phoneNumber;
          this.user.roleId = data.role.roleId;
          this.user.secureHandle = queryParam['secureHandle'];
        })

      })

    });

  }

}
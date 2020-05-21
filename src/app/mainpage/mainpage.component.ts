import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { RedirectService } from '../auth/services/redirect.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.less']
})
export class MainpageComponent implements OnInit {


  constructor(private router: Router,
    private route: ActivatedRoute,
    private authService: NbAuthService, private redirectService: RedirectService) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParam: any) => {

      if (localStorage.getItem("logined") == "true") {
        location.reload();
        localStorage.setItem("logined", "false");
      }
      else {
        
        if (this.isAuth()) {
          this.redirectService.redirectToLists(this.router);
        }
        else {
          this.redirectService.redirectToLogin(this.router);
        }
      }
    });


  }

  goToLists() {
    this.router.navigateByUrl("/action-lists");
  }

  isAuth(): boolean {
    var isAuth: boolean;

    this.authService.isAuthenticated().subscribe(result => {
      isAuth = result;
    });

    return isAuth;

  }



}
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { UserInfoRegistration } from 'src/app/list-manager/models/user-info-reg';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class RedirectService {

    
    constructor(private http: HttpClient) {
        
    } 

    redirectToNoAccess(router:Router){
        router.navigateByUrl("action-lists/no-permission");
    }

    redirectToLists(router:Router){
        router.navigateByUrl("action-lists");
    }

    redirectToLogin(router:Router){
        router.navigateByUrl("auth/login");
    }
    

}

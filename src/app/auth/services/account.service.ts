import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { UserInfoRegistration } from 'src/app/list-manager/models/user-info-reg';
import { RedirectService } from './redirect.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AccountService {

    private apiPrefix: string = environment.apiUrl + '/api/Account';

    constructor(private http: HttpClient, 
        private authService: NbAuthService,
        private redirectService:RedirectService,
        private router:Router) {

    }

    preregistrationStep(secureHandle: string): Observable<UserInfoRegistration> {

        return this.http.get<UserInfoRegistration>(`${this.apiPrefix}/PreregistrationStep`, {
            params:
            {
                secureHandle: secureHandle
            }
        });
    }

    checkSecureHandle(secureHandle: string): Observable<any> {
        return this.http.get<any>(`${this.apiPrefix}/CheckSecureHandle`, {
            params:
            {
                secureHandle: secureHandle
            },
            observe: 'response'
        });
    }
}

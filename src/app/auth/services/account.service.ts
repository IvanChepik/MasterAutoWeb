import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';

@Injectable({
    providedIn: 'root'
})

export class AccountService {

    private apiPrefix: string = environment.apiUrl + '/api/Account';
    
    constructor(private http: HttpClient, private authService: NbAuthService) {
        
    } 

    getUser(token:NbAuthSimpleToken):Observable<any>
    {
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+token);
        return this.http.get<any>(`${this.apiPrefix}/UserInfo`, {headers:headers});
    }

    logOut(token:NbAuthSimpleToken):Observable<any>
    {
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+token);
        return this.http.get<any>(`${this.apiPrefix}/Logout`, {headers:headers});
    }

    isAuth()
    {
        
    }
}

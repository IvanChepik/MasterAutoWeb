import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NbAuthSimpleToken } from '@nebular/auth';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/list-manager/models/user';
import { Field } from 'src/app/list-manager/models/field';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private apiPrefix: string = environment.apiUrl + '/api/UserInfo';

  constructor(private http: HttpClient)
  {}

  getUser(token:NbAuthSimpleToken):Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+token);
        return this.http.get<any>(`${this.apiPrefix}/CurrentUserInfo`, {headers:headers});
    }

  getUsers(token):Observable<User[]>{
    const headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Bearer '+token,
    });

    return this.http.get<User[]>(`${this.apiPrefix}/Users`, { headers: headers});
  }

  getAnotherUserInfo(token, userName:string):Observable<User>{
    const headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Bearer '+token,
    });

    return this.http.get<User>(`${this.apiPrefix}/User`, { headers: headers, params:{
      username:userName,           
    }});
  }

  getCurrentUserFields(token):Observable<Field[]>{

      const headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Bearer '+token,
    });

    return this.http.get<Field[]>(`${this.apiPrefix}/CurrentUserInfo/Fields`, { headers: headers });
  }

  getUserFields(token, userName:string):Observable<Field[]>{

      const headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Bearer '+token,
    });

    return this.http.get<any>(`${this.apiPrefix}/UserInfo/Fields`, { headers: headers, params:{
              username:userName
    }});
  }

  applyUserFields(token, fields:Field[]):Observable<any>{

        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token,
        });

        return this.http.put<any>(`${this.apiPrefix}/CurrentUserInfo/Fields`, fields, { headers: headers });
  }

  deleteUser(token, username:string):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'Bearer '+token,
  });

    return this.http.delete<any>(`${this.apiPrefix}/User`, { headers: headers, params:{
              username:username
    }});
  }
    
}

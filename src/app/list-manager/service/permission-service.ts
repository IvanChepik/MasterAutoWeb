
import { environment } from 'src/environments/environment';
import { Mapper } from '../models/mapper';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListInfo } from '../models/list-info';
import { LeadList } from '../models/lead-list';
import { Observable } from 'rxjs';
import { RolePushRequest } from '../models/role-push-request';
import { Permission } from '../models/permission';
import { User } from '../models/user';


@Injectable({
    providedIn: 'root'
})

export class PermissionService {
    private url: string = environment.apiUrl + 'api/PermissionService';
    constructor(private http: HttpClient) {}

    getPermissions(token):Observable<Permission[]>{

        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token,
        });

        return this.http.get<any>(`${this.url}/Permissions`, { headers: headers});
    }

    getUsers(token):Observable<User[]>{
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token,
        });

        return this.http.get<User[]>(`${this.url}/Users`, { headers: headers});
    }


}
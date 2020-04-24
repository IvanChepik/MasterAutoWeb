
import { environment } from 'src/environments/environment';
import { Mapper } from '../models/mapper';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListInfo } from '../models/list-info';
import { LeadList } from '../models/lead-list';
import { Observable } from 'rxjs';
import { RolePushRequest } from '../models/role-push-request';
import { Role } from '../models/role';
import { RoleGetRequest } from '../models/role-get.request';

@Injectable({
    providedIn: 'root'
})

export class RoleService {
    private url: string = environment.apiUrl + 'api/PermissionService/RoleService';
    constructor(private http: HttpClient) {}

    addRole(roleName:string, permissions:string[], token):Observable<any>{
        const body = new RolePushRequest(roleName, permissions);

        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token,
        });

        return this.http.post<any>(`${this.url}/Role`, body, { headers: headers });
    }

    getRoles(token):Observable<RoleGetRequest>{
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token,
        });

        return this.http.get<RoleGetRequest>(`${this.url}/GetRoles`, { headers: headers});
    }

    editRole(token, roleId:string, roleName:string, permissions:string[]){
        const body = new RolePushRequest(roleName, permissions);

        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token,
        });

        return this.http.put<any>(`${this.url}/Role/${roleId}`, body, { headers: headers });
    }

    getRoleInfo(token, roleId:string) : Observable<Role>{
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token,
        });

        return this.http.get<Role>(`${this.url}/Role/${roleId}`, { headers: headers});
    }

    deleteRole(token, roleId:string){
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token,
        });

        return this.http.delete<any>(`${this.url}/Role/${roleId}`, { headers: headers});
    }


}
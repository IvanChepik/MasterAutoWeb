
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
import { PermissionUser } from '../models/permission-with-user-name';
import { DanilaOpyatPomenyalPermission } from '../models/danila-opyat-pomenyal-permission';


@Injectable({
    providedIn: 'root'
})

export class PermissionService {
    private url: string = environment.apiUrl + 'api/PermissionService';
    constructor(private http: HttpClient) {}

    getPermissions(token):Observable<DanilaOpyatPomenyalPermission>{

        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token,
        });

        return this.http.get<DanilaOpyatPomenyalPermission>(`${this.url}/ListOfPermissions`, { headers: headers});
    }

    getOwnPermission(token):Observable<PermissionUser>{
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token,
        });

        return this.http.get<PermissionUser>(`${this.url}/OwnPermissions`, { headers: headers})
    }

    giveRoleToUser(token, name:string, roleId:number){
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token,
        });

        return this.http.get<any>(`${this.url}/RoleToUser`, { headers: headers, params:{
            name:name,
            roleId:roleId.toString()           
        }});
    }

}
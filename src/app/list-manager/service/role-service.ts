
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
import { RoleFieldPushRequest } from '../models/role-field-push-request';
import { FieldGet } from '../models/field.get';

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

    getFields(token, roleId:number):Observable<FieldGet[]>{
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token,
        });


        return this.http.get<FieldGet[]>(`${this.url}/Role/${roleId}/Fields`, { headers: headers, params: {
            id:roleId.toString()
        }});

    }

    addField(token, roleId:number, fieldName:string, rolesOfVisible:number[]){

        var body = new RoleFieldPushRequest(fieldName, rolesOfVisible);

        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token,
        });

        return this.http.put<any>(`${this.url}/Role/${roleId}/Field`, body, { headers: headers });

    }

    deleteField(token, roleId:number, fieldName:string){

        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token,
        });

        return this.http.delete<any>(`${this.url}/Role/${roleId}`, { headers: headers, params: {
            fieldName:fieldName
        }});

    }

}
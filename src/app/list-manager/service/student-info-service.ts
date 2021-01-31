
import { environment } from 'src/environments/environment';
import { Mapper } from '../models/mapper';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListInfo } from '../models/list-info';
import { LeadList } from '../models/lead-list';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class StudentInfoService{

    private url: string = environment.apiUrl + 'api/StudentInfoService';
    constructor(private http: HttpClient) {}
        
    getStudentInfo(token, studentId:number):Observable<any>{
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token,
        });

        return this.http.get<any>(`${this.url}/Student/${studentId}`, { headers: headers});
    }
}
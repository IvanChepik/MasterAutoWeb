
import { environment } from 'src/environments/environment';
import { Mapper } from '../models/mapper';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListInfo } from '../models/list-info';
import { LeadList } from '../models/lead-list';
import { Observable } from 'rxjs';
import { ReceivedHistory } from '../models/history';
import { SendMultiplyMessagesRequest } from '../models/send-multiply-sms';

@Injectable({
    providedIn: 'root'
})

export class InfoService{

    private url: string = environment.apiUrl + 'api/StudentInfo';
    constructor(private http: HttpClient) {}

    sendRegistrationRequest(token, email:string) : Observable<any>{
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token,
        });

        return this.http.get<any>(`${this.url}/SendRegistrationRequest`, { headers: headers, params:{
            email:email,         
        } });
    }

}
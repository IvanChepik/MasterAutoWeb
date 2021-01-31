
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

export class SmsService {
    private url: string = environment.apiUrl + 'api/MessageService/SmsClient';
    constructor(private http: HttpClient) {}

    SendMessage(token, studentId:string, text:string):Observable<any>
    {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token,
        });

        return this.http.get<any>(`${this.url}/student/${studentId}/SendSms`, { headers: headers, params:{
            text:text           
        } });
    }

    sendSmsStandAlone(token, phoneNumber:string, text:string)
    {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token,
        });

        return this.http.get<any>(`${this.url}/SendSms`, { headers: headers, params:{
            text:text,
            phoneNumber:phoneNumber        
        } });
    }

    sendSmsMessageMultiply(token, studentIdsList:number[], text:string):Observable<any>
    {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token,
        });

        const body = new SendMultiplyMessagesRequest(studentIdsList, text);

        return this.http.post<any>(`${this.url}/SendMessages`, body, { headers: headers });
    }

    getSms(token, studentId:string) : Observable<ReceivedHistory>
    {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token,
        });

        return this.http.get<ReceivedHistory>(`${this.url}/student/${studentId}/messages`, { headers: headers});
    }
    
}
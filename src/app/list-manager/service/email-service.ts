
import { environment } from 'src/environments/environment';
import { Mapper } from '../models/mapper';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListInfo } from '../models/list-info';
import { LeadList } from '../models/lead-list';
import { Observable } from 'rxjs';
import { ReceivedHistory } from '../models/history';
import { SendMultiplyMessagesRequest } from '../models/send-multiply-sms';
import { InviteUserRequest } from '../models/invite-user-request';
import { InviteUserMultiplyRequest } from '../models/invte-user-multiply-model';
import { SendEmailRequest } from '../models/send-email-request';

@Injectable({
    providedIn: 'root'
})

export class EmailService {

    private url: string = environment.apiUrl + 'api/MessageService';
    constructor(private http: HttpClient) { }

    inviteUser(token, email: string,
        firstName: string,
        lastName: string,
        phoneNumber: string,
        roleId: number): Observable<any> {

        const body = new InviteUserRequest(firstName, lastName, email, phoneNumber, roleId);

        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer ' + token,
        });

        return this.http.put<any>(`${this.url}/EmailClient/InviteUser`, body, { headers: headers });
    }

    inviteStudent(token, email: string, studentId: number): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer ' + token,
        });

        return this.http.get<any>(`${this.url}/EmailClient/InviteUser`, {
            headers: headers, params: {
                email: email,
                studentId: studentId.toString()
            }
        });
    }

    inviteStudentMultiply(token, studentIds: number[]) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer ' + token,
        });

        var body = new InviteUserMultiplyRequest(studentIds);

        return this.http.post<any>(`${this.url}/EmailClient/InviteUsers`, body, { headers: headers });
    }

    sendEmail(token, email: string, subject: string, message: string): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer ' + token,
        });

        if (!subject)
        {
            subject = "Без темы";
        }

        var body = new SendEmailRequest(email, subject, message);

        return this.http.post<any>(`${this.url}/EmailClient/SendEmail`, body, { headers: headers });

    }

}
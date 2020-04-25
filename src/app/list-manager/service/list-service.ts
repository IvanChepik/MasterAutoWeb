
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

export class ListManagerService {
    private url: string = environment.apiUrl + 'api/StudentListsService';
    constructor(private http: HttpClient) {}

    addList(leadListId: number, jsonString: string, mappings: Mapper[], userId: string, listName: string, listOfNewColumns: string[], token): Observable<LeadList> {

        const body = new ListInfo(mappings, jsonString, listName, listOfNewColumns, leadListId);

        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token,
        });

        console.log("hello");
        return this.http.post<any>(`${this.url}/StudentList`, body, { headers: headers });
    }

    getListsByUser(token):Observable<ListInfo[]>
    {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token,
        });

        return this.http.get<ListInfo[]>(`${this.url}/StudentLists`, { headers: headers });
    }

    getListById(listId:string, token)
    {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token,
        });

        return this.http.get<any>(`${this.url}/StudentList/${listId}`, { headers: headers});
    }
}
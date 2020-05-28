import { Injectable } from '@angular/core';


const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
    providedIn: 'root'
})

export class EmailService {
    constructor() { }
    
    exportUsersToExcel(){

    }
}
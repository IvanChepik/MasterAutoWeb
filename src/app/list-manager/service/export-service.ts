import { Injectable } from '@angular/core';
import { ModelForExport } from '../models/model-for-export';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
    providedIn: 'root'
})
export class ExportService {
    constructor() { }
    
    exportUsersToExcel(exportingModel:ModelForExport[]){
        var data: any = [{
            
        }]

        exportingModel.forEach(model => {

            var newModel = {
                "Имя":model.fullName,
            }

            model.fields.forEach(element => {
                newModel[element.key] = element.value;
            });


            data.push(
                newModel
            )
        });

        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
        const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "Students");
    }

   private saveAsExcelFile(buffer: any, fileName: string): void {
        const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});   FileSaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + EXCEL_EXTENSION);
    }
}
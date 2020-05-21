import { Component, OnInit, HostListener, ViewChild, Output, EventEmitter, ChangeDetectorRef, NgZone, ElementRef } from '@angular/core';
import { Observable, Subject, Subscription, BehaviorSubject } from 'rxjs';
import * as XLSX from 'xlsx';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms'
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mapper } from '../models/mapper';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';
import { ListManagerService } from '../service/list-service';
import { Router } from '@angular/router';
import { PermissionService } from '../service/permission-service';
import { RedirectService } from 'src/app/auth/services/redirect.service';


@Component({
    selector: 'app-define-new-list',
    templateUrl: './define-new-list.component.html',
    styleUrls: ['./define-new-list.component.less']
  
  })
  export class DefineNewListComponent implements OnInit {

    isLoading = false;
    linearMode = true;
    headers: string[];
    json: string = "";
    mappedFields: Mapper[] = [];

    @ViewChild('formInputCsv', {static:true})
    formInputCsv: ElementRef;

    names: string[] = ['Имя', 'Фамилия', 'Факультет','Группа','Телефон', 'Email']; 

    formGroupMapper: FormGroup;

    formGroup = new FormGroup({
      file: new FormControl(null, Validators.required),
      listName : new FormControl('', [Validators.required, Validators.minLength(2)])
      });


      @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
        var regexp = new RegExp('^.*\.(xls|xlsx|csv)$');		
        console.log(event);		
        if(event != null && regexp.test(event.item(0).name)){			
          const file = event && event.item(0);
          this.formGroup.controls.file.setValue(file);
          this.mappedFields = [];
          this.uploadListener();
        }
        else 
        {
          this.clearFile();
        }
      }

      uploadListener(): void {

        let workBook = null;
        let jsonData: string;
    
        const reader = new FileReader();
        const file = this.formGroup.controls.file.value;    
    
        let headers = [];
        reader.onload = (event) => {
          console.log(file);
          const data = reader.result;
          workBook = XLSX.read(data, { type: 'binary' });
          jsonData = workBook.SheetNames.reduce((initial, name) => {
          const sheet = workBook.Sheets[name];
          var range = XLSX.utils.decode_range(sheet['!ref']);
          var C, R = range.s.r;
    
          for(C = range.s.c; C <= range.e.c; ++C) {
            var cell = sheet[XLSX.utils.encode_cell({c:C, r:R})] 
        
            var hdr = "UNKNOWN " + C; 
            if(cell && cell.t) hdr = XLSX.utils.format_cell(cell);
    
            headers.push(hdr);
            this.mappedFields.push(new Mapper(hdr, 'do not import'));
            
          }
    
    
          initial = XLSX.utils.sheet_to_json(sheet, {header: 0, raw: true, defval:" "});
          return initial;
          }, {});
        
          const dataString = JSON.stringify(jsonData);
          
          
          this.json = dataString;
          console.log(this.json);
          this.headers = this.getHeaders(headers);
        }
    
        
        reader.readAsBinaryString(file);
        
      }

      getHeaders(headers: string[]){
        let headerArray = [];
        headers.forEach(header => {
          headerArray.push(header);
        });
        return headerArray;
      }


      user={};
  

  constructor(private router:Router, 
    private authService: NbAuthService,
     private http :HttpClient, 
     private redirectService:RedirectService,
     private permissionService:PermissionService,
     private formBuilder: FormBuilder, 
     private service:ListManagerService) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthSimpleToken) => {
        if (token.isValid()) {
          this.user = token;  
        }

      });
  }

    ngOnInit()
    {
      this.permissionService.getOwnPermission(this.user).subscribe(data => {
        console.log(this.user);
        if(data.permissions.find(x => x.permissionName == "StudentsListsMaintenance"))
        {
          this.formGroupMapper = this.formBuilder.group({
            mapCtrl: new FormControl(''),
            newColumn: new FormControl('')
          });
        }
        else
        {
          this.redirectService.redirectToNoAccess(this.router);
        }
      });
      

    }

    clearFile()
    {
      this.formGroup.controls.file.setValue(null);
      this.formInputCsv.nativeElement.value="";
    }

    goForwardMapping(stepper:any)
    {
      var mappers: any = this.mappedFields;
      if(mappers){
        console.log(mappers);
        let address = mappers.filter(x => x.destinationField == "Имя").length > 0;
        let city = mappers.filter(x => x.destinationField == "Факультет").length > 0;
        let state = mappers.filter(x => x.destinationField == "Телефон").length > 0;
        if(address && city && state){
        stepper.next();
        }
        else{
          //this.openSnackBar(false);
        }
       }
    }

    onSubmit():void
    {
      this.isLoading = true;
      console.log("hello");
      if(this.formGroup.controls.listName.value){
        if(this.formGroup.controls.listName.valid) {
          this.service.addList(
            0,
            this.json, 
            this.mappedFields,
            "1",
            this.formGroup.controls.listName.value,
            null,
            this.user,
            ).subscribe(data => {
              this.isLoading = false;
              console.log(data);
              this.router.navigateByUrl("/action-lists");
            })
        }
      }

    }
  }
  
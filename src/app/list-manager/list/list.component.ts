import { Component, OnInit } from '@angular/core';
import { ListManagerService } from '../service/list-service';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { ListInfo } from '../models/list-info';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { NbSidebarService, NbDialogService } from '@nebular/theme';
import { MessagerComponent } from '../messager/messager.component';


@Component({
  selector: 'app-list-compo',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

    user={};
    listId: string;
    isSendFormShowed:boolean = false;
    listContent ={};
    //listContent = [
   //   {
    //    Property:"Иван", 
    //    SellerEmail:"Чепик", 
    //    SellerPhone:"РФИКТ"
    //  },
   // ]

    headers = [];
    settingsTest = {};

    settings;

    mySettings = {
      selectMode: 'multi',
      
      columns: {
        
      },

      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
      },

      actions:{
        custom: 
        [{ name: 'viewrecord', title: '<i class="nb-search"></i>'}],
      }

               
    };

    openItemPage(event)
    {
      console.log(event);
      //[routerLink]="['view-list/', list.ListId]"
      this.router.navigate(['action-lists/messager/', event.data.studentId]);
      //this.dialogService.open(MessagerComponent, {context: {idUser: event.data.studentId}});
      
    }

    constructor(private router: Router, private authService: NbAuthService, private service:ListManagerService, private route: ActivatedRoute, private dialogService:NbDialogService)
    {
        this.authService.onTokenChange()
        .subscribe((token: NbAuthSimpleToken) => {
          if (token.isValid()) {
            this.user = token;  
         }
  
        }); 
    }

   ngOnInit()
   {
    this.route.params.subscribe(data => {
        this.listId = data.listId;
        this.service.getListById(data.listId, this.user).subscribe(data => {
            console.log(data);
            this.listContent = data.UserData;
            this.headers = data.Mapper;
            this.defineColumns(data.Mapper);
            console.log(this.settings);
        })
      });
   }

   defineColumns(headers)
   {
    headers.forEach(item => {
      if (item.DestinationField !="do not import")
      {
        this.mySettings.columns[item.SourceField] = {title:item.DestinationField};
        console.log(item.SourceField);
        console.log(item.DestinationField);
      }
    });
    this.settings = Object.assign({},this.mySettings);
   }

   test()
   {
     console.log(this.listContent);
     console.log(this.headers);
     console.log(this.settings);
   }

   changeStateShowSendForm()
   {
     this.isSendFormShowed = !this.isSendFormShowed
   }

   onCustomAction(event) {
    switch (event.action) {
      case 'viewrecord':
        this.openItemPage(event);
        break;
    }
  }

}

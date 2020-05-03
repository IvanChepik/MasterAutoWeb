import { Component, OnInit } from '@angular/core';
import { ListManagerService } from '../service/list-service';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { ListInfo } from '../models/list-info';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { NbSidebarService, NbDialogService, NbToastrService } from '@nebular/theme';
import { MessagerComponent } from '../messager/messager.component';
import { RedirectService } from 'src/app/auth/services/redirect.service';
import { PermissionService } from '../service/permission-service';
import { EmailService } from '../service/email-service';


@Component({
  selector: 'app-list-compo',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

    loading = false;
    user={};
    listId: string;
    isSendFormShowed:boolean = false;
    listContent ={};
    selectedRows = [];

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

    constructor(private router: Router, 
      private authService: NbAuthService, 
      private service:ListManagerService, 
      private route: ActivatedRoute, 
      private dialogService:NbDialogService,
      private permissionService:PermissionService,
      private redirectService:RedirectService,
      private emailService:EmailService, 
      private toastrService: NbToastrService)
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
     
    this.permissionService.getOwnPermission(this.user).subscribe(data => {
      if(data.permissions.find(x => x.permissionName == "StudentsListsMaintenance"))
      {
            this.loading = true;
            this.route.params.subscribe(data => {
            this.listId = data.listId;
            this.service.getListById(data.listId, this.user).subscribe(data => {
            this.listContent = data.UserData;
            console.log(data.UserData);
            this.headers = data.Mapper;
            this.defineColumns(data.Mapper);
            this.loading = false;
         })
        });
      }
      else
      {
        this.redirectService.redirectToNoAccess(this.router);
      }
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
    console.log(this.settings);
   }

   test()
   {
     console.log(this.listContent);
     console.log(this.headers);
     console.log(this.settings);
   }

   changeStateShowSendForm(event)
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

  public onUserRowSelect(event) {
     this.selectedRows = event.selected;
     console.log(event.selected)
  }

  inviteStudents(event){

    this.loading = true;

    var studentListIds = this.selectedRows.map(element => {
      return element.studentId;
    })

    this.emailService.inviteStudentMultiply(this.user, studentListIds).subscribe(data => {
      this.loading = false;
      this.showToast('top-right', 'Ваше приглашение отправлено')
    });
  }

  showToast(position, message) {
    this.toastrService.show(message, 'Готово!', { position });
  }

}

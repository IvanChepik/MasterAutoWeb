import { CommonModule } from '@angular/common';
import { NgModule, InjectionToken } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbChatModule, NbUserModule, NbCardModule, NbListModule, NbAlertModule, NbInputModule, NbButtonModule, NbCheckboxModule, NbThemeModule, NbChatMessageComponent, NB_THEME_OPTIONS, DARK_THEME,
NbLayoutComponent,
NbLayoutModule, NbPopoverModule, NbStepperModule, NbSelectComponent, NbSelectModule, NbIconModule, NbSidebarModule, NbMenuModule, NbSidebarService, NbTreeGridModule, NbDialogModule} from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { DefineNewListComponent } from './define-new-list/define-new-list.component';
import { ListManagerService } from './service/list-service';
import { ManagerMainComponent } from './manager-main/manager-main.component';
import { SharedComponent } from './shared/shared.component';
import { ListComponent } from './list/list.component';
import { DataTablesModule } from 'angular-datatables';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MessagerComponent } from './messager/messager.component';
import { SmsService } from './service/sms-service';
import { WriteMessageComponent } from './list/write-message/write-message.component';




  

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  NbInputModule,
  NbButtonModule,
  CommonModule,
  BrowserModule,
  BrowserAnimationsModule,
  NbPopoverModule,
  NbButtonModule,
  FormsModule,
  RouterModule,
  NbLayoutModule,
  NbEvaIconsModule,
  NbIconModule,
  NbSidebarModule.forRoot(),
  NbMenuModule.forRoot(),
  NbListModule,
  MatTableModule,
  NbSelectModule,
  NbUserModule,
  NbTreeGridModule,
  Ng2SmartTableModule,
  DataTablesModule.forRoot(),
  NbCardModule,
  NbStepperModule,
	NbChatModule.forChild(),
  NbThemeModule.forRoot(),
  NbDialogModule.forRoot(),
  ],
  
  providers:[
    ListManagerService,
    NbSidebarService,
    SmsService
  ],

  declarations: [
    DefineNewListComponent,
    ManagerMainComponent,
    SharedComponent,
    ListComponent,
    MessagerComponent,
    WriteMessageComponent
  ],
  entryComponents:[
    
  ],

  exports: [
    
  ]
})
export class ListManagerModule {
}
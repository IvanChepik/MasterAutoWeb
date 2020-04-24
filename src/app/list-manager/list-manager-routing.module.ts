import { Routes, RouterModule } from "@angular/router";
//import { MessagerInfoMain } from '../messager-info-main/messager-info-main.component';
//import { MessagerPageComponent } from '../messager-page/messager-page.component';
import { NgModule } from '@angular/core';
import { DefineNewListComponent } from './define-new-list/define-new-list.component';
import { SharedComponent } from './shared/shared.component';
import { ManagerMainComponent } from './manager-main/manager-main.component';
import { ListComponent } from './list/list.component';
import { MessagerComponent } from './messager/messager.component';
import { RolePageComponent } from './role-page/role-page.component';
import { UsersPageComponent } from './users-page/users-page';
//import { SideMenuComponent } from '../shared/side-menu.component';
//import { TemplatePageComponent } from '../templates-page/templates-page.component';

const childRoutes: Routes = [
    {
        path: 'new-list',
        component: DefineNewListComponent
    },
    {
      path: '',
      component: ManagerMainComponent
    },
    {
      path: 'view-list/:listId',
      component: ListComponent
    },
    {
      path: 'messager/:studentId',
      component:MessagerComponent
    },
    {
      path:'roles',
      component:RolePageComponent
    },
    {
      path:'all-users',
      component:UsersPageComponent
    }

];

const common = 'action-lists';

const routes: Routes = [
    {
      path: common, component: SharedComponent, children: childRoutes
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ListManagerRoutingModule { }
  

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import {
	NbAuthComponent,
	NbLoginComponent,
	NbRegisterComponent,
	NbLogoutComponent,
	NbRequestPasswordComponent,
	NbResetPasswordComponent,
  } from '@nebular/auth';


const routes: Routes = [
	{
		path:'',
		component: MainpageComponent,	
	},
	{
		path: 'auth',
		loadChildren: './modules/auth.module#NgxAuthModule',
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

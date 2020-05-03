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
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
	{
		path:'',
		component: MainpageComponent,	
	},
	{
		path: 'auth',
		loadChildren: './modules/auth.module#NgxAuthModule',
	},
	{
		path: 'user-profile/:username',
      	component:UserProfileComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

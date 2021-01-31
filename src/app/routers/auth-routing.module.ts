import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent, NbRegisterComponent, NbRequestPasswordComponent, NbResetPasswordComponent, NbLogoutComponent } from '@nebular/auth';
import { NgxLoginComponent } from '../auth/login/login.component';
import { NgxRegisterComponent } from '../auth/register/register.component';


export const routes: Routes = [
	{
		path: '',
		component: NbAuthComponent,
		children: [
		{
			path: 'login',
			component: NgxLoginComponent,
		},
		{
			path: 'register',
			component: NgxRegisterComponent
		},
		{
			path: 'request-password',
			component: NbRequestPasswordComponent
		},
		{
			path: 'reset-pass',
			component: NbResetPasswordComponent
		},
		{
			path: 'logout',
			component: NbLogoutComponent
		}
	],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
	constructor(){
		console.log("Burned");
	}
}
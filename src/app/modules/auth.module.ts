import { CommonModule } from '@angular/common';
import { NgModule, InjectionToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from '../routers/auth-routing.module';
import { NbAuthModule, NbPasswordAuthStrategy, NbAuthJWTToken, NbAuthSimpleToken } from '@nebular/auth';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbThemeModule,
  NbChatModule,
  NbChatMessageComponent,
  NbIconModule
} from '@nebular/theme';

import { NgxLoginComponent } from '../auth/login/login.component';
import { NgxRegisterComponent } from '../auth/register/register.component';
const formSetting: any = {
	redirectDelay: 0,
	showMessages: {
		success: true,
	},
  };
  

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
	RouterModule,
	NbIconModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
	NgxAuthRoutingModule,
	NbEvaIconsModule,

    NbAuthModule.forRoot({
		strategies: [
		  NbPasswordAuthStrategy.setup({
			  

			name: 'email',
			token: {
				class: NbAuthSimpleToken,
				key: 'token',
			  },
			baseEndpoint: 'https://twm-api.azurewebsites.net/',

			 login: {
				 endpoint: 'api/Account/SignInToAccount',
				 redirect: {
					 success: '/',
					 failure: null,
				 },
				 method: 'post',
				 
			 },
			 
			 
			 
			 register: {
				endpoint: 'api/Account/Register',
				 redirect: {
					 success: '/',
					 failure: null,
				 },
				 method: 'post',
			 },
			 logout: {
				endpoint: '/account/logout',
				redirect: {
					success: '/welcome',
					failure: null,
				},
				method: 'post',
			  },
			resetPass: {
				endpoint: '/auth/resetpass',
				redirect: {
					success: '/welcome',
					failure: null,
				},
				method: 'post',
			},
			requestPass: {
				endpoint: '/auth/request-pass',
				method: 'post',
			  },

		  }),
		],
		forms: {},
	  }),
  ],
  
  declarations: [
      NgxLoginComponent,
      NgxRegisterComponent
  ]
})
export class NgxAuthModule {
}
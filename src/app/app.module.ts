import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbButtonModule, NbUserModule, NbDialogModule } from '@nebular/theme';
import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import { environment } from 'src/environments/environment';
import { ListManagerModule } from './list-manager/list-manager.module';
import { ListManagerRoutingModule } from './list-manager/list-manager-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderAuthComponent } from './auth/header-auth/header-auth.component';
import { MessagerComponent } from './list-manager/messager/messager.component';
import { TemplatesComponent } from './list-manager/templates/templates.component';
import { AuthService } from './list-manager/service/auth-service';


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    HeaderComponent,
    HeaderAuthComponent,
    TemplatesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NbCardModule,
    ListManagerRoutingModule,
    NbDialogModule.forRoot(),
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint:"https://twm-api.azurewebsites.net/api/Account",
           login: {
             endpoint: '/login',
             method: 'post', 
           },
           register: {
             endpoint: '/Register',
             method:'post'
             
           },
           resetPass: {
             endpoint: '/resetPassword',
             method: 'post', 
           },
           requestPass: {
             endpoint: '/forgotPassword',
             method: 'post', 
           },
           logout: {
             endpoint: '/logout',
             method: 'post', 
           }
        }),
      ],
      forms: {},
    }), 
    NbLayoutModule,
    NbButtonModule,
    ListManagerModule,
    NbUserModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

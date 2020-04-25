import { Component, OnInit } from '@angular/core';
import { ListManagerService } from '../service/list-service';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { ListInfo } from '../models/list-info';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manager-main',
  templateUrl: './manager-main.component.html',
  styleUrls: ['./manager-main.component.less']
})
export class ManagerMainComponent implements OnInit {

    user={};
    lists={};
    loading = false;
    
    settings = {
      columns: {
        Property: {
          title: 'Имя'
        },
        SellerEmail: {
          title: 'Фамилия'
        },
        SellerPhone: {
          title: 'Факультет'
        }
      }
    };

    constructor(private authService: NbAuthService, private service:ListManagerService, private router:Router)
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
      
      this.loading = true;
      this.service.getListsByUser(this.user).subscribe(data => 
        {
            this.loading = false;
            this.lists=data;
        })
   }

   translateDateTimeToDate(datetime:string) : string
   {
      return datetime.substring(0,10);
   }

}

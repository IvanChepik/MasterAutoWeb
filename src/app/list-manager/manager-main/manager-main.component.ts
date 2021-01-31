import { Component, OnInit } from '@angular/core';
import { ListManagerService } from '../service/list-service';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { ListInfo } from '../models/list-info';
import { Router } from '@angular/router';
import { PermissionService } from '../service/permission-service';
import { RedirectService } from 'src/app/auth/services/redirect.service';


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

    constructor(private authService: NbAuthService, 
      private service:ListManagerService, 
      private router:Router,
      private permissionService:PermissionService,
      private redirectService:RedirectService)
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
      this.permissionService.getOwnPermission(this.user).subscribe(data => {
        if(data.permissions.find(x => x.permissionName == "StudentsListsMaintenance"))
        {
          
          this.service.getListsByUser(this.user).subscribe(data => 
            {
                this.loading = false;
                console.log(data);
                this.lists=data;
            })
        }
        else
        {
          this.redirectService.redirectToNoAccess(this.router);
        }
      });
   }

   translateDateTimeToDate(datetime:string) : string
   {
      return datetime.substring(0,10);
   }

   deleteList(event, listId:number){
     this.loading = true;
     this.service.deleteList(listId.toString(), this.user).subscribe(data => {
       this.loading = false;
       this.router.navigate(['action-lists/']);
     })
   }

   goToList(event, listId:string) {
     this.router.navigate(['action-lists/view-list/', listId]);
   }

   goToUserProfile(event, userName:string){
    this.router.navigateByUrl("user-profile/" + userName)
  }


}

import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbMenuItem } from '@nebular/theme';


@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.less']
})
export class SharedComponent implements OnInit {

  userName: string;
  items: NbMenuItem[] = [
    {
      title: "Списки",
      icon: "home-outline",
      link: "/action-lists"
    },
    {
      title: "Общий список",
      icon: "layers-outline",
      link: "/action-lists/filter-page"
    },
    {
      title: "Создание списка",
      icon: "download-outline",
      link: "/action-lists/new-list"
    },
    {
      title:"Общение",
      icon: "layers-outline",
      children:[
        {
          title:"Шаблоны",
          icon:"layers-outline",
          link:"/action-lists/messaging/templates"
        }
      ]
    }
  ]
  constructor(private sidebarService: NbSidebarService,
    ) { }

  ngOnInit() {
    //this.authorizeService.getUser().subscribe( x=> {
    //  this.userName = x.displayName;
    //})
    this.userName="hello";
  }

  toggle() {
    if(this.items.every(x=>x.title == "")){
      this.items = [
        {
          title: "Списки",
          icon: "home-outline",
          link: "/action-lists"
        },
        {
          title: "Общий список",
          icon: "layers-outline",
          link: "filter-page"
        },
        {
          title: "Создание списка",
          icon: "download-outline",
          link: "/action-lists/new-list"
        },
        {
          title: "Общение",
          children: [
            {
              title: 'Шаблоны',
              link: "messaging/templates",
            }
          ],
        }
      ]
    }
    else {
      this.items.map(x=>x.title = "");
    }
    this.sidebarService.toggle(true, 'left');
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
  }
}

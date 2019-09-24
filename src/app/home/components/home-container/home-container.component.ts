import { Component, OnInit, Input, Inject } from '@angular/core';
import { TopMenu } from 'src/app/shared/components';
import { Router } from '@angular/router';
import { HomeService, token } from '../../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  constructor(private router:Router,private services:HomeService,
  @Inject(token) private baseUrl:string) {}
  
  topMenus: TopMenu[] = [];
  
  ngOnInit(): void {
    this.topMenus = this.services.getTabs();
    console.log(this.baseUrl);
  }

  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home',topMenu.link]);
  }
}

import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { TopMenu } from 'src/app/shared/components';
import { Router } from '@angular/router';
import { HomeService, token } from '../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeContainerComponent implements OnInit {
  // `@Inject` 这个注解用于找到可注入的标识，
  // 也就是 provide 的那个标识
  // @Inject(token) private baseUrl: string
  constructor(private router: Router, private service: HomeService) {}
  topMenus$:Observable<TopMenu[]>;
  ngOnInit(): void {
    this.topMenus$ = this.service.getTabs();
  }

  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link]);
  }
}

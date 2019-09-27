import { NgModule, InjectionToken } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  HomeContainerComponent,
  HomeDetailComponent,
  HomeGrandComponent,
  HomeAuxComponent,
  ParentComponent
} from './components';
import { HomeService, token } from './services';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    HomeAuxComponent,
    ParentComponent
  ],
  // 如果使用 providedIn 写法，除了 root 外，其它模块直接写都会导致循环引用
  // 所以需要额外写一个 Module，在此导入
  // imports: [SharedModule, HomeRoutingModule, ServiceModule],
  // 如果传统写法，如果采用这种写法，就不能在 service 中写 `providedIn`
  // providers: [{ provide: token, useValue: 'http://localhost' }],
  imports: [SharedModule, HomeRoutingModule]
})
export class HomeModule {}

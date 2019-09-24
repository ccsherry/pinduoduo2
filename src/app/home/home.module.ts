import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent, HomeGrandComponent, HomeAuxComponent, ChildComponent, ParentComponent } from './components';
import { HomeDetailComponent } from './components/home-detail';
import { HomeService, token } from './services';

@NgModule({
  declarations: [HomeContainerComponent,HomeDetailComponent,HomeGrandComponent,HomeAuxComponent,
    ChildComponent,ParentComponent
  ],
  providers:[
    HomeService,{ provide: token, useValue:'http://local'}
  ],
  imports: [SharedModule, HomeRoutingModule]
})
export class HomeModule {}

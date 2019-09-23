import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent } from './components';
import { HomeDetailComponent } from './components/home-detail';

@NgModule({
  declarations: [HomeContainerComponent,HomeDetailComponent],
  imports: [SharedModule, HomeRoutingModule]
})
export class HomeModule {}

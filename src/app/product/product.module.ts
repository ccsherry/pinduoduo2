import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [],
  imports: [SharedModule, ProductRoutingModule]
})
export class ProductModule {}

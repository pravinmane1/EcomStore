import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeRoutingModule } from './home-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductListComponent, ProductComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    InfiniteScrollModule,
    SharedModule,
  ],
})
export class HomeModule {}

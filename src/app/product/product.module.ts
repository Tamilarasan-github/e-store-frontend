import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';

import { ProductService } from './services/product.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';

import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: 'product-list', component: ProductListComponent },
];

@NgModule({
  declarations: [
    CartComponent,
    ProductCardComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductFilterComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    RouterModule.forRoot(routes),
  ],
  exports:  [ProductListComponent, CartComponent],
  providers: [ProductService],
})
export class ProductModule { }

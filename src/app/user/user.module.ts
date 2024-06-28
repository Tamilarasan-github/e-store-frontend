import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserOrderDetailsComponent } from './components/user-order-details/user-order-details.component';
import { UserAddressComponent } from './components/user-address/user-address.component';


@NgModule({
  declarations: [
    UserOrderDetailsComponent,
    UserAddressComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    UserOrderDetailsComponent,
    UserAddressComponent
  ]
})
export class UserModule { }

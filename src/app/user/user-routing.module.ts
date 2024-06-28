import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserOrderDetailsComponent } from './components/user-order-details/user-order-details.component';
import { UserAddressComponent } from './components/user-address/user-address.component';
import { AuthGuardService } from '../auth-guard.service';

const routes: Routes = [ { path: 'user-orders', component: UserOrderDetailsComponent },
{ path: 'user-address', component: UserAddressComponent, canActivate: [AuthGuardService] },
{ path: 'user-order-details', component: UserOrderDetailsComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

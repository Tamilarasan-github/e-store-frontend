import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CartComponent } from '../product/components/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { MainSearchService } from './services/main-search.services';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'cart', component: CartComponent },
  ];

@NgModule({
    declarations: [
        HomeComponent,
        NavigationComponent,
        HeaderComponent,
        SignUpComponent,
        LoginComponent,
    ],
    exports: [
        HomeComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        FormsModule,
        CommonModule,
        NgbModule,
        HomeRoutingModule,
    ],
    providers: [MainSearchService]
})
export class HomeModule { }

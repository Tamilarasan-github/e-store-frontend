import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonRoutingModule } from './common-routing.module';
import { ModalPopUpComponent } from './components/modal-pop-up/modal-pop-up.component';


@NgModule({
  declarations: [
    ModalPopUpComponent
  ],
  imports: [
    CommonModule,
    CommonRoutingModule
  ]
})
export class CommonModule { }

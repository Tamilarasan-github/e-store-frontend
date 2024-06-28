import { NgModule } from '@angular/core';

import { CommonRoutingModule } from './common-routing.module';
import { ModalPopUpComponent } from './components/modal-pop-up/modal-pop-up.component';
import { SpinnerComponent } from './components/spinner/spinner/spinner.component';


@NgModule({
  declarations: [
    ModalPopUpComponent,
    SpinnerComponent
  ],
  exports: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    CommonRoutingModule
  ]
})
export class CommonModule { }

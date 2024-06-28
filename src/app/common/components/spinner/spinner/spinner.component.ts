import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/common/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

  isSpinnerVisible: boolean;

  constructor(private spinnerService: SpinnerService) {
    this.isSpinnerVisible = false;
    this.spinnerService.spinnerVisibleObservable.subscribe((value)=>{
      console.log('Spinner Observable:'+value);
      this.isSpinnerVisible = value;
    });
  }
}

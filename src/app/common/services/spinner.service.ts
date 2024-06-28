import { Injectable } from '@angular/core';
import { Observable } from '@apollo/client';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private spinnerVisibleBehaviorSubject: BehaviorSubject<boolean>;
  public spinnerVisibleObservable;

  constructor() {
    this.spinnerVisibleBehaviorSubject = new BehaviorSubject<boolean>(false);
    this.spinnerVisibleObservable = this.spinnerVisibleBehaviorSubject.asObservable();
  }

  show() {
    console.log('Spinner show');
    this.spinnerVisibleBehaviorSubject.next(true);
  }

  hide() {
    console.log('Spinner hide');
    this.spinnerVisibleBehaviorSubject.next(false);
  }

  isVisible() {
    return this.spinnerVisibleObservable;
  }
}

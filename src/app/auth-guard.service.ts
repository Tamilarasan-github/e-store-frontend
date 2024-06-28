import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from './home/services/auth.service';
import { ModalPopUpService } from './common/services/modal-pop-up.service';
import { LoginComponent } from './home/components/login/login.component';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private modalPopUpService: ModalPopUpService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authService.isUserAuthorizedObservable.pipe(
      map(isAuthorized => {
        if (isAuthorized) {
          return true;
        } else {
          // Redirect to the login page
          this.modalPopUpService.openModal('Login', LoginComponent);
          return false;
          //return this.router.parseUrl('/login');
        }
      })
    );
  }
}

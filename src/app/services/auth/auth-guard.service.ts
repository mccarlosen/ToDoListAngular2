import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor( private authService: AuthService, private router: Router ) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    let url: string = state.url;

    this.checkLogin(url);

    return true;
  }

  checkLogin(url: string) {
    if(this.authService.isLoggedIn) { return true; }

    this.authService.redirectUrl = url;
    this.router.navigate(['./login']);

    return false;
  }

}

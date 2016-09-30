import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  public isLoggedIn: boolean = false;

  redirectUrl: string = '/dashboard'; // default url

  constructor(private router: Router) {}

  login(): boolean {
    return this.isLoggedIn = true
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}

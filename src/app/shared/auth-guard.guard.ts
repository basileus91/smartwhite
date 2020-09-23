import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthenticationService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    userLoggedIn = false;

    constructor(
        private readonly authService: AuthenticationService,
        private readonly router: Router
    ) {}

  canActivate() {
      if (this.authService.userLogin()) {
       return true;
      } else {
       return this.router.navigateByUrl('/');;
      }
    }
  }
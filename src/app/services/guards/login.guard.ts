import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(public userService: UserService, public router: Router) {}
  canActivate(): boolean {

    if (this.userService.isLogged() ) {
      return true;
    } else {
      console.log('Bloqueado por el guard');
      this.router.navigate(['/login']);
      localStorage.clear();
      sessionStorage.clear();
      return false;
    }

  }
}

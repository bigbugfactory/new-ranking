import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, CanActivateChild } from '@angular/router';
import { AuthService } from '../auth.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if (this.authService.isToken()) {
        return true;
        } else {
          this.router.navigate(['login']);
        }
    }

    canActivateChild(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {
      return this.canActivate(route, state);
    }

    checkLogin(url: string): boolean {
      console.log(this.authService.isLoggedIn);
      if (this.authService.isLoggedIn) return true;
      this.authService.redirectUrl = url;

      this.router.navigate(['admin/login']);
      return false;
    }
}

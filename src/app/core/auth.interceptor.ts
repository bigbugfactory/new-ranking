import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from './services/admin.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  
  constructor(private adminService: AdminService) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.adminService.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.adminService.token}`,
        }
      });
    }

    return next.handle(request);
  }
}
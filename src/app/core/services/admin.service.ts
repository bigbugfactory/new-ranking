import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  loginUrl:string = '/api/admin/login';
  remindPasswordUrl:string = '/api/admin/reset_password/request';

  newPassword:string = '/api/admin/reset_password/process';

  constructor(private http:HttpClient) { }

  sendDataLogin(user): Observable<object> {
    return this.http.post<object>(this.loginUrl, user).pipe(
      tap(data => {
        if (('token' in data) === false) {
          throw new Error('Invalid response structure');
        }
      }),
    );
  }
  
  remindPassword(email): Observable<boolean> {
    return this.http.post(this.remindPasswordUrl, email, { observe: 'response' }).pipe(
      map(response => response.status === 201),
    );
  }

  sendNewPassword(password): Observable<boolean> {
    return this.http.post(this.newPassword, password, { observe: 'response' }).pipe(
      map(response => response.status === 200),
      catchError(() => of(false)),
    );
  }

  getTokenForCreate(): void {
    return;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  loginUrl:string = '/api/admin/login';
  remindPasswordUrl:string = '/api/admin/reset_password/request';

  newPassword:string = '/api/admin/reset_password/process';

  constructor(private http:HttpClient) { }

  sendDataLogin(user) {
    return this.http.post(this.loginUrl, user);
  }
  
  remindPassword(email): Observable<boolean> {
    return this.http.post(this.remindPasswordUrl, email, { observe: 'response' }).pipe(
      map(response => response.status === 201)
      );
  }

  sendNewPassword(password) {
    return this.http.post(this.newPassword, password, { observe: 'response' }).pipe(
      map(response => response.status === 201)
      );
  }

}

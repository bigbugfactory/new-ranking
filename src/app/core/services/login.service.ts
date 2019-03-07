import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl:string = '/api/admin/login';

  constructor(private http:HttpClient) { }

  sendData(user) {
    return this.http.post(this.loginUrl, user);
  }
}

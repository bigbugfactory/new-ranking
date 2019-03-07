import { Injectable } from '@angular/core';
// import {decode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public getToken(): string {
    return localStorage.getItem('token');
  }

  token = this.getToken();

  // public isAuthenticated(): boolean {
  //   // get the token
    
  //   // return a boolean reflecting 
  //   // whether or not the token is expired
  //   return tokenNotExpired(null, token);
  // }

  constructor() { }
}

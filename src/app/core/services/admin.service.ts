import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LoginResponse } from './login-response.interface';
import { RankingResponse } from './ranking.interface';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  readonly loginUrl:string = '/api/admin/login';
  readonly remindPasswordUrl:string = '/api/admin/reset_password/request';
  readonly newPassword:string = '/api/admin/reset_password/process';
  readonly halfFormUrl:string = '/api/admin/ranking';

  private _token: string;
  navigate: boolean = false;

  get token(): string {
    if (!this._token) {
      this._token = localStorage.getItem('token');
    }

     return this._token;
  }

  constructor(private http:HttpClient,
              private loader:LoaderService) { }

  sendDataLogin(user): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginUrl, user).pipe(
      tap(data => {
        if (('token' in data) === false) {
          throw new Error('Invalid response structure');
        }
        this._token = data.token;
        localStorage.setItem('token', data.token);
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

  sendFirstPieceOfForm(form) {
    return this.http.post(this.halfFormUrl, form, { observe: 'response' }).pipe(
      tap(response => console.log(response)),
      catchError(() => of(false))
    );
  }

  getDataForNav() {
    return this.http.get(this.halfFormUrl).pipe(
      map(response => response['rankings'])
    );
  }

  removeItemFromMenu(id):Observable<any> {
    return this.http.post(`${this.halfFormUrl}/${id}/delete`, id, { observe: 'response' }).pipe(
      tap(response => console.log(response)),
    );
  }

  checkRank(rank:string):Observable<RankingResponse> {    
    return this.http.get<RankingResponse>(`${this.halfFormUrl}/${rank}`);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemindPasswordService {

  remindPasswordUrl:string = 'https://open-ranking.aplikacjakreatywna.pl/api/admin/reset_password/request';

  constructor(private http:HttpClient) { }

  whatIsSuccess(success) {
    return success;
  }
  
  remindPassword(email): Observable<boolean> {
    return this.http.post(this.remindPasswordUrl, email, { observe: 'response' }).pipe(
      map(response => response.status === 201)
    );
  }
}


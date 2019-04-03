import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: `
    <button type="button" class="logout__button" (click)="show = true">Wyloguj</button>

    <pop-up [isShow]="show" (yes)="logout()" (no)="close()">
      Czy na pewno chcesz się wylogować?
    </pop-up>
  `,
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  show: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() { }

  logout() {
    this.show = false;
    localStorage.removeItem('token');
    localStorage.removeItem('data_id');
    this.router.navigate(['/login']);
  }

  close() {
    this.show = false;
  }


}

import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-logout',
  template: `
    Wyloguj
  `,
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  @HostListener('click') onClick() {
     console.log('clicked')
  }

  constructor() { }

  ngOnInit() {
  }

}

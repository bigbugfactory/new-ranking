import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  removeItemPopup:boolean = true;
  logoutPopup:boolean = false;
}

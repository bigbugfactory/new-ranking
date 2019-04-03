import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlashMessangerService {

  message: string;

  constructor() { }

  show(message: string) {
    this.message = message;

    // setTimeout(() => {
    //     this.message = '';
    // }, 4000);
  }

}


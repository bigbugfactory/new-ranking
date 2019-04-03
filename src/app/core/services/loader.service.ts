import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderState } from '../../shared/model/loader.interface';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loaderSubject = new BehaviorSubject<LoaderState>({show: false});

  constructor() { }

  showNow() {
    this.loaderSubject.next({show: true});
  }

  hideNow() {
      this.loaderSubject.next({show: false});
  }
}

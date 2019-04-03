import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Popup } from '../model/popup.interface';

@Component({
  selector: 'pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
  animations: [
    trigger('triggerFlash', [
      state('show', style({
        display: 'block',
        opacity: 1
      })),
      state('hide', style({
        display: 'none',
        opacity: 0
      })),
      transition('show <=> hide', [
        animate('.5s')
      ])
    ])
  ]
})
export class PopUpComponent implements OnInit, Popup {

  @Input() isShow;

  @Output() yes = new EventEmitter();
  @Output() no = new EventEmitter();

  constructor() { }

  message: string;

  ngOnInit() {
  }

  clickNo() {
    this.no.emit();
  }

  clickYes() {
    this.yes.emit();
  }

}

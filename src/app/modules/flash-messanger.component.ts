import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FlashMessangerService } from '../core/services/flash-messanger.service';

@Component({
  selector: 'flash-messanger',
  templateUrl: './flash-messanger.component.html',
  styleUrls: ['./flash-messanger.component.scss'],
  animations: [
    trigger('triggerFlash', [
      state('show', style({
        top: '50px',
      })),
      state('hide', style({
        top: '-80px'
      })),
      transition('show => closed', [
        animate('1s')
      ]),
      transition('hide => open', [
        animate('1s')
      ])
    ])
  ]
})
export class FlashMessangerComponent implements OnInit {

  isShow = true;

  toggle() {
    this.isShow = !this.isShow;
  }

  get message(): string {
    return this.flashMessanger.message;
  }

  constructor(private flashMessanger:FlashMessangerService) {
    
  }


  ngOnInit() {
  }

}

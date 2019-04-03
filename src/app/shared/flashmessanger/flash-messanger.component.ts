import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FlashMessangerService } from '../../core/services/flash-messanger.service';

@Component({
  selector: 'flash-messanger',
  templateUrl: './flash-messanger.component.html',
  styleUrls: ['./flash-messanger.component.scss'],
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
export class FlashMessangerComponent implements OnInit {

  @Input() isShow: boolean;

  get message(): string {
    return this.flashMessanger.message;
  }

  constructor(private flashMessanger: FlashMessangerService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { PopupService } from '../../../core/services/popup.service';

@Component({
  selector: 'pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  constructor(private popup:PopupService) { }

  ngOnInit() {
  }

}

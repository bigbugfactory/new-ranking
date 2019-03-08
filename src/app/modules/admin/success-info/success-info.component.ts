import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-success-info',
  templateUrl: './success-info.component.html',
  styleUrls: ['./success-info.component.scss']
})
export class SuccessInfoComponent implements OnInit {

  @Input() message: string;

  constructor() { 
  }

  ngOnInit() {  }

}

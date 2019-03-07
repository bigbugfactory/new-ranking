import { Component, OnInit } from '@angular/core';
import { RemindPasswordService } from '../../../core/services/remind-password.service';

@Component({
  selector: 'app-success-info',
  templateUrl: './success-info.component.html',
  styleUrls: ['./success-info.component.scss']
})
export class SuccessInfoComponent implements OnInit {

  remind;

  constructor(private remindPasswordService:RemindPasswordService) { 
    this.remind = remindPasswordService;
  }

  ngOnInit() {  }

}

import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../../../core/services/admin.service';

@Component({
  selector: 'app-success-info',
  templateUrl: './success-info.component.html',
  styleUrls: ['./success-info.component.scss']
})
export class SuccessInfoComponent implements OnInit {

  @Input() message: string;

  constructor(private adminService:AdminService) { 

    this.adminService.navigate = false;
    
  }

  ngOnInit() {  }

}

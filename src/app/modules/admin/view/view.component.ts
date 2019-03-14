import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(private adminService:AdminService) {
    this.adminService.navigate = true;  
   }

  ngOnInit() {
  }

}

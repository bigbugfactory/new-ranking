import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../core/services/Admin.service';

@Component({
  selector: 'app-create-ranking',
  templateUrl: './create-ranking.component.html',
  styleUrls: ['./create-ranking.component.scss']
})
export class CreateRankingComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  token:void;

  ngOnInit() {
      this.token = localStorage.setItem('token', JSON.stringify(this.token));
      console.log(this.token);
  }



}

import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { AdminService } from '../../../core/services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success-info',
  templateUrl: './success-info.component.html',
  styleUrls: ['./success-info.component.scss'],
})
export class SuccessInfoComponent implements AfterViewInit {

  @Input() message: string;

  constructor(private adminService: AdminService,
              private router: ActivatedRoute) {

    this.adminService.navigate = false;

  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.message = this.router.snapshot.data.message;
    // });
   }

}

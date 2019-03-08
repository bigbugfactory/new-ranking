import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../../core/services/Admin.service';

@Component({
  selector: 'app-remind-password',
  templateUrl: './remind-password.component.html',
  styleUrls: ['./remind-password.component.scss']
})
export class RemindPasswordComponent implements OnInit {

  remindPassword:FormGroup;
  email:FormControl;

  success:boolean;
  message:string;

  constructor(private adminService:AdminService) {

    this.email = new FormControl('', [Validators.required, Validators.email]);

    this.remindPassword = new FormGroup({
      email: this.email
    });
   }

  ngOnInit() {
  }

  getEmail() {
    this.adminService.remindPassword(this.remindPassword.value).subscribe(success => {
      this.success = success
      console.log(this.success);
    });
  }

  showInfo() {
    this.message = "Na podany adres e-mail został wysłany link do zmiany hasła."
  }

}

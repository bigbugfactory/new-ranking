import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RemindPasswordService } from '../../../core/services/remind-password.service';

@Component({
  selector: 'app-remind-password',
  templateUrl: './remind-password.component.html',
  styleUrls: ['./remind-password.component.scss']
})
export class RemindPasswordComponent implements OnInit {

  remindPassword:FormGroup;
  email:FormControl;

  success:boolean;

  constructor(private passwordService:RemindPasswordService) {

    this.email = new FormControl('', [Validators.required, Validators.email]);

    this.remindPassword = new FormGroup({
      email: this.email
    });
   }

  ngOnInit() {
  }

  getEmail() {
    this.passwordService.remindPassword(this.remindPassword.value).subscribe(
      success => this.success = success
    );
  }

}

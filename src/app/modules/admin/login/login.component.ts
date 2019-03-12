import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AdminService } from '../../../core/services/Admin.service';
import { FlashMessangerService } from '../../../core/services/flash-messanger.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  email: FormControl;
  password: FormControl;
  token:any;

  state:string = '';

  constructor(private adminService:AdminService,
              private flashMessanger:FlashMessangerService,
              private router:Router) {

    this.email = new FormControl('wiktoria@great.com.pl', [Validators.required, Validators.email]);
    this.password = new FormControl('Aa111111', [Validators.required]);

    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
   }

  ngOnInit() { }
  
  send() {
    this.loginForm.disable();

    this.adminService.sendDataLogin(this.loginForm.value)
      .pipe(
        finalize(() => this.loginForm.enable()),
      )
      .subscribe(data => {
        this.token = data;
        localStorage.setItem('token', JSON.stringify(this.token));
        this.router.navigateByUrl('/admin/create');
      }, () => {
        this.flashMessanger.show('Coś poszło nie tak.');
      });
  }

}

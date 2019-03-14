import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AdminService } from '../../../core/services/admin.service';
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
  state:string = '';

  constructor(private adminService:AdminService,
              private flashMessanger:FlashMessangerService,
              private router:Router) {

    this.adminService.navigate = false;

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
      .subscribe(
        () => this.router.navigate(['/admin/first-create']),
        () => this.flashMessanger.show('Coś poszło nie tak.'),
      );
  }

}

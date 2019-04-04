import { Component, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, tap } from 'rxjs/operators';
import { AdminService } from '../../../core/services/admin.service';
import { FlashMessangerService } from '../../../core/services/flash-messanger.service';
import { LoaderService } from '../../../core/services/loader.service';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  loginForm:FormGroup;
  email: FormControl;
  password: FormControl;
  state:string = '';

  show: boolean = false;

  constructor(private adminService: AdminService,
              private flashMessanger: FlashMessangerService,
              private loader: LoaderService,
              private router: Router,
              private authService: AuthService) {

    this.adminService.navigate = false;

    this.email = new FormControl('wiktoria@great.com.pl', [Validators.required, Validators.email]);
    this.password = new FormControl('Aa111111', [Validators.required]);

    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
   }

  ngAfterViewInit () {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/admin/first-create']);
    }
  }

  send() {
    this.loginForm.disable();

    this.adminService.sendDataLogin(this.loginForm.value)
      .pipe(
        tap(() => this.loader.showNow()),
        finalize(() => {
          this.loginForm.enable(),
          this.loader.hideNow()
        }),
      )
      .subscribe(
        () => this.router.navigate(['/admin/first-create']),
        () => {
          this.show = true;
          this.flashMessanger.show('Coś poszło nie tak.');
          setTimeout(() => {
            this.show = false;
          }, 4000);
        },
      );
  }

  login() {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) this.router.navigate(['admin/login']);
    });
  }

  logout() {
    this.authService.logout();
  }


}

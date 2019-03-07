import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { LoginService } from '../../../core/services/login.service';

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

  constructor(private loginService:LoginService) {

    this.email = new FormControl('wiktoria@great.com.pl', [Validators.required, Validators.email]);
    this.password = new FormControl('Wiki1234', [Validators.required]);

    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
   }

  ngOnInit() { }
  
  send() {
    this.loginService.sendData(this.loginForm.value).subscribe(data => {
      this.token = data;
      console.log(this.token);
      localStorage.setItem('token', JSON.stringify(this.token));
    });
  }

}

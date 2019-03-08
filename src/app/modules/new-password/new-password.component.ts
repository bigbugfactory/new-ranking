import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../core/services/Admin.service';
import { FlashMessangerService } from '../../core/services/flash-messanger.service';
import { FormGroup, FormControl, Validators, PatternValidator, ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  newPasswordForm:FormGroup;
  password_1:FormControl;
  password_2:FormControl;
  passwordRegex:RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zżźćńółęąśŻŹĆĄŚĘŁÓŃA-Z\d]{8,}$/;
  token:string;
  data:Object;

  constructor(private adminService:AdminService,
              private flashMessanger:FlashMessangerService) {
    this.password_1 = new FormControl('', Validators.compose([
                                            this.match('password_2'),
                                            Validators.required,
                                            Validators.pattern(this.passwordRegex)]));
    this.password_2 = new FormControl('', Validators.compose([
                                            this.match('password_1'),
                                            Validators.required,
                                            Validators.pattern(this.passwordRegex)]));
    this.newPasswordForm = new FormGroup({
      password_1: this.password_1,
      password_2: this.password_2
    });
  }

  ngOnInit() {
  }

  checkPassword() {
    this.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvb3Blbi1yYW5raW5nLmFwbGlrYWNqYWtyZWF0eXduYS5wbCIsImlhdCI6MTU1MjA0OTMyMSwidXNlcl9pZCI6IjFmYTBlZGNhLTFlNDktNGIzZS04NzQ3LTQxMzRmYTI1MWFkMCIsImVtYWlsIjoid2lrdG9yaWFAZ3JlYXQuY29tLnBsIn0.2_KbVkziJGIESiRw1J-TJCIUcE59ph3n80N7XkMfhZI';
    this.data = {
      password: this.newPasswordForm.value.password_1,
      token: this.token
    }

    this.adminService.sendNewPassword(this.data).subscribe(data => {
      console.log(data);
    });
  }

  match(controlName: string, display: boolean = true): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        let response = null;
        const twinControl = control.root.get(controlName);
        if (twinControl) {
            if (display) {
                if (twinControl.value !== control.value) {
                    response = { match: true };
                }
            }
            if (!control['matchValidationInitiator']) {
                control['matchValidationInitiator'] = true;
                twinControl.updateValueAndValidity();
                control['matchValidationInitiator'] = false;
            }
        }
        return response;
    };
}
}

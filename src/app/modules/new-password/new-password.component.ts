import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AdminService } from '../../core/services/admin.service';
import { FlashMessangerService } from '../../core/services/flash-messanger.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  newPasswordForm: FormGroup;
  password_1: FormControl;
  password_2: FormControl;
  passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zżźćńółęąśŻŹĆĄŚĘŁÓŃA-Z\d]{8,}$/;
  token: string;
  data: Object;
  url = new URL(location.href);

  constructor(private adminService: AdminService,
              private flashMessanger: FlashMessangerService) {
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
    // this.token = this.url.searchParams.get('token');
    this.token = 'sl1nfVq6rB4EmuLDX2QCPok3m2UFy9sEz1YVnCCKDWa3m3CQW8bbKYeHhykB';
    this.data = {
      password: this.newPasswordForm.value.password_1,
      token: this.token
    }

    this.adminService.sendNewPassword(this.data).subscribe(success => {
      this.flashMessanger.show(success ? 'test' : 'nie-test');

      // this.router.navigateByUrl('/admin/login');
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

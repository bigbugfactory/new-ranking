import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { RemindPasswordComponent } from './remind-password/remind-password.component';
import { SuccessInfoComponent } from './success-info/success-info.component';
import { NewPasswordComponent } from '../new-password/new-password.component';
import { CreateRankingComponent } from './create-ranking/create-ranking.component';

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    RemindPasswordComponent,
    SuccessInfoComponent,
    NewPasswordComponent,
    CreateRankingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }

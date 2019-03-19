import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlashMessangerModule } from '../flash-messanger.module';
import { NewPasswordComponent } from '../new-password/new-password.component';
import { AdminComponent } from './admin.component';
import { CreateRankingComponent } from './create-ranking/create-ranking.component';
import { LoaderComponent } from './loader/loader.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RemindPasswordComponent } from './remind-password/remind-password.component';
import { SelectIdComponent } from './select-id/select-id.component';
import { SuccessInfoComponent } from './success-info/success-info.component';
import { ViewComponent } from './view/view.component';
import { RankingListComponent } from './navigation/ranking-list/ranking-list.component';
import { PopUpComponent } from './pop-up/pop-up.component';

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    RemindPasswordComponent,
    SuccessInfoComponent,
    NewPasswordComponent,
    CreateRankingComponent,
    NavigationComponent,
    SelectIdComponent,
    ViewComponent,
    LogoutComponent,
    LoaderComponent,
    RankingListComponent,
    PopUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlashMessangerModule
  ],
  exports: [
    AdminComponent,
    LoaderComponent
  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingComponent } from './modules/ranking/ranking.component'
import { AdminComponent } from './modules/admin/admin.component';
import { LoginComponent } from './modules/admin/login/login.component';
import { RemindPasswordComponent } from './modules/admin/remind-password/remind-password.component';
import { NewPasswordComponent } from './modules/new-password/new-password.component';
import { CreateRankingComponent } from './modules/admin/create-ranking/create-ranking.component';

const routes: Routes = [
  {
    path: '',
		pathMatch: 'full',
    redirectTo: 'admin'
  },
  {
    path: 'ranking', 
    component: RankingComponent
  },
  {
    path: 'new-password',
    component: NewPasswordComponent,
  },
  {
    path: 'admin', 
    component: AdminComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'remind-password',
        component: RemindPasswordComponent,
      },
      {
        path: 'create',
        component: CreateRankingComponent,
      }
    ],
  },
  {
    path: '**',
		pathMatch: 'full',
    redirectTo: 'admin'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

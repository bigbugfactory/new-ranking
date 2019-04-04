import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';
import { CreateRankingComponent } from './modules/admin/create-ranking/create-ranking.component';
import { LoginComponent } from './modules/admin/login/login.component';
import { RemindPasswordComponent } from './modules/admin/remind-password/remind-password.component';
import { SelectIdComponent } from './modules/admin/select-id/select-id.component';
import { ViewComponent } from './modules/admin/view/view.component';
import { NewPasswordComponent } from './modules/new-password/new-password.component';
import { RankingComponent } from './modules/ranking/ranking.component';
import { SuccessInfoComponent } from './modules/admin/success-info/success-info.component';
import { AuthGuard } from './core/services/auth/auth.guard';


const OUTER_ROUTES = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },

  {
    path: 'remind-password',
    component: RemindPasswordComponent,
  },
  {
    path: 'first-create',
    component: CreateRankingComponent,
  },
  {
    path: 'select-id',
    component: SelectIdComponent,
  },
  {
    path: 'view/:ranking_id',
    component: ViewComponent
  },
  {
    path: 'success',
    component: SuccessInfoComponent,
    data: {
      'message': 'Ranking został wysłany i pojawi się w manu.'
    }
  }
]
const routes: Routes = [
  {
    path: '',
		pathMatch: 'full',
    redirectTo: 'admin'
  },
  {
    path: 'login',
    component: LoginComponent,
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
    canActivateChild: [AuthGuard],
    children: OUTER_ROUTES,
  },
  {
    path: '**',
    redirectTo: 'admin'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

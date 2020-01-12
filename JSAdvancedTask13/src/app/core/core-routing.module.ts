import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
    { path: '', redirectTo:'login', pathMatch:'full' },
    { path: 'login', component:LoginComponent },
    { path: 'users', loadChildren: () => import('../users/users.module').then(m => m.UsersModule) },
    { path: 'my-page', loadChildren: () => import('../my-page/my-page.module').then(m => m.MyPageModule) },
    { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

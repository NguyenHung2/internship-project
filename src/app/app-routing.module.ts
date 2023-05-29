import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pasges/dashboard/dashboard.component';
import { ReportsComponent } from './pasges/reports/reports.component';
import { UsersComponent } from './pasges/users/users.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

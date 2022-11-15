import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyProfileComponent} from './pages/company-profile/company-profile.component';
import {HomeComponent} from './pages/home/home.component';
import {JobFormComponent} from './pages/job-form/job-form.component';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'company-profile', component: CompanyProfileComponent},
  { path: 'job-form', component: JobFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyRegistrationComponent } from './pages/company-registration/company-registration.component'

const routes: Routes = [
  {path:"companyRegister", component:CompanyRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

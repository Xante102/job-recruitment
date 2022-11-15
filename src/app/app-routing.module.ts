import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyRegistrationComponent } from './pages/company-registration/company-registration.component';
import { AppicantRegistrationComponent } from './pages/appicant-registration/appicant-registration.component';
import { JobListingComponent } from './pages/job-listing/job-listing.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';

const routes: Routes = [
  {path:"companyRegister", component:CompanyRegistrationComponent},
  {path:"applicantRegister", component:AppicantRegistrationComponent},
  {path:"jobListing", component:JobListingComponent},
  {path:"jobDetails", component:JobDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

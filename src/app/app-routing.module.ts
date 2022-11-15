import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyRegistrationComponent } from './pages/company-registration/company-registration.component';
import { AppicantRegistrationComponent } from './pages/appicant-registration/appicant-registration.component';
import { JobListingComponent } from './pages/job-listing/job-listing.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ApplicantProfileComponent } from './pages/applicant-profile/applicant-profile.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FaqsComponent } from './pages/faqs/faqs.component';

const routes: Routes = [
  {path:"companyRegister", component:CompanyRegistrationComponent},
  {path:"applicantRegister", component:AppicantRegistrationComponent},
  {path:"jobListing", component:JobListingComponent},
  {path:"jobDetails", component:JobDetailsComponent},

  { path: 'aboutus', component: AboutUsComponent},
  { path: 'contactus', component: ContactUsComponent},
  { path: 'faq', component: FaqsComponent},
  { path: 'applicant-profile', component: ApplicantProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

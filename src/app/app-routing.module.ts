import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ApplicantProfileComponent } from './pages/applicant-profile/applicant-profile.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FaqsComponent } from './pages/faqs/faqs.component';

const routes: Routes = [
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

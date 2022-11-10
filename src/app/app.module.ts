import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CompanyProfileComponent } from './pages/company-profile/company-profile.component';
import { JobFormComponent } from './pages/job-form/job-form.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ApplicantProfileComponent } from './pages/applicant-profile/applicant-profile.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { JobListingComponent } from './pages/job-listing/job-listing.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { AppicantRegistrationComponent } from './pages/appicant-registration/appicant-registration.component';
import { CompanyRegistrationComponent } from './pages/company-registration/company-registration.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyProfileComponent,
    JobFormComponent,
    LoginComponent,
    ContactUsComponent,
    AboutUsComponent,
    ApplicantProfileComponent,
    FaqsComponent,
    JobListingComponent,
    JobDetailsComponent,
    AppicantRegistrationComponent,
    CompanyRegistrationComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent implements OnInit {

  companyRegisterForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.companyRegisterForm = new FormGroup({
      email : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
      passwordConfirmed : new FormControl('', Validators.required),
      zipCode : new FormControl('', Validators.required),
      address : new FormControl('', Validators.required),
      country : new FormControl('', Validators.required),
      companyOp : new FormControl('', Validators.required),
      uploadLogo : new FormControl('', Validators.required),
      uploadCerti : new FormControl('', Validators.required),
      companyName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(11)])
    })
  }

  onSubmit() {
    if (this.companyRegisterForm.valid) {
    console.log(this.companyRegisterForm.value)
    alert("Welcome!!! We have sent you a link in your email. Please Validate your email to proceed")
    } else {
      alert("Please complete the form to proceed")
      console.log("form not valid")
    }
  }

}




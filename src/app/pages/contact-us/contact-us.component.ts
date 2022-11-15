import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  data = {
    fullname: '',
    email: '',
    companyname: '',
    phonenumber: '',
    department: ''
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}

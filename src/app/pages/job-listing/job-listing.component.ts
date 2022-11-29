import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { PostService } from 'app/services/post.service';
// import { UserInterface } from '../interfaces/user.interface';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit {
  jobs: any;

  // constructor(private PostService:PostService, private routes:Router) { }

  ngOnInit(): void {
  }

  // listJob(){
  //   this.PostService.get().subscribe((data:any)=>{
  //     console.log(data);
  //     this.jobs = data;
  //   })
  // }
}

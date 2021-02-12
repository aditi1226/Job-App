import { Component, OnInit } from '@angular/core';
import { job } from '../models/job';
import {TableModule} from 'primeng/table';
import { apiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html',
  styleUrls: ['./job-page.component.css']
})
export class JobPageComponent implements OnInit {

  newjob:string="";
  errormsg:string="";
  msg:string="";

  companyname:string="";
  jobprofile:string="";
  location:string="";
  noofemp:number=0;
  salary:number=0;

  constructor(private apiservice:apiService,private router:Router) { }
  
  ngOnInit(): void {
    
  }
  
  postJobBoolean()
  {
    this.checkLoggedin();
  }
  postJob()
  {
    if(this.checkLoggedin())
    {
      if(this.companyname=="" || this.jobprofile=="" || this.location=="")
      {
        this.errormsg="Fill the required details";
      }
      else
      {
        this.newjob="{ \"companyName\": \""+this.companyname+"\", \"jobProfile\": \""+this.jobprofile+"\", \"location\": \""+this.location+"\", \"salary\": "+this.salary+", \"numberOfEmployees\": "+this.noofemp+" }";
        console.log(this.newjob);

        this.apiservice.postJob(JSON.parse(this.newjob)).subscribe
        (
          data=>
          {
            console.log("added");
            this.msg="Added Successfully"
          },
          error=>
          {
            console.log("error");
          }
        );
      }

    }
  }
  checkLoggedin() : boolean
  {
    if(sessionStorage.getItem("username")==null)
    {
      this.router.navigateByUrl("/login");
    }
    else 
    return true;
    return false;
  }

 
}

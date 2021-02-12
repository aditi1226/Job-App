import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { job } from '../models/job';
import { profile } from '../models/profile';
import { apiService } from '../services/api.service';

@Component({
  selector: 'app-get-job',
  templateUrl: './get-job.component.html',
  styleUrls: ['./get-job.component.css']
})

export class GetJobComponent implements OnInit {

  constructor(private api :apiService,private router:Router) { }
  jobs: job[]=[];
  getJob:boolean=false;

  profiles: profile[]=[];
  companies: string[]=[];

  
  // selectedProfile:string="";
  // selectedCompany:string="";
  finalProfile:string="";
  finalCompany:string="";
  
  ngOnInit(): void {
    this.getProfiles();
    this.getCompany();
  }
  getJobs()
  {
    console.log("hey");
    if(this.checkLoggedin())
    {
      this.getJob=true;

      if(this.finalProfile!="" && this.finalCompany!="")
        {
            this.api.getjobsbyprofileandcompany(this.finalProfile,this.finalCompany)
              .subscribe
              (
                data=>
                {
                  const x =JSON.stringify(data);
                  const obj=JSON.parse(x);
                  this.jobs=obj;
                  console.log(this.jobs);
                },
                error=>
                {
                  console.log("Error");
                }
              );
        }
        else if(this.finalProfile!="" && this.finalCompany=="")
        {
            this.api.getjobsbyprofile(this.finalProfile)
              .subscribe
              (
                data=>
                {
                  const x =JSON.stringify(data);
                  const obj=JSON.parse(x);
                  this.jobs=obj;
                  console.log(this.jobs);
                },
                error=>
                {
                  console.log("Error");
                }
              );
        }
        else if(this.finalCompany!="" && this.finalProfile=="")
        {
            this.api.getjobsbycompany(this.finalCompany)
              .subscribe
              (
                data=>
                {
                  const x =JSON.stringify(data);
                  const obj=JSON.parse(x);
                  this.jobs=obj;
                },
                error=>
                {
                  console.log("Error");
                }
              );
        }
    }
  }
  getProfiles()
  {
    this.api.getProfile().subscribe(
      data=>
      {
        const x =JSON.stringify(data);
        const obj=JSON.parse(x);
        this.profiles=obj;
        
      },
      error=>{
        console.log("error");
      }
    )

  }
  getCompany()
  {
    this.api.getCompany().subscribe(
      data=>
      {
        const x =JSON.stringify(data);
        const obj=JSON.parse(x);
        this.companies=obj;
      },
      error=>{
        console.log("error");
      }
    )
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

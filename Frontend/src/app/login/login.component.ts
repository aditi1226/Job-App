import { Component, Input, OnInit } from '@angular/core';
import {DialogModule} from 'primeng/dialog';
import { Router } from '@angular/router';
import {AppRoutingModule, routingComponents} from 'D:/windows E/Job App/JobApp/src/app/app-routing.module'
import { HttpClient } from '@angular/common/http';
import { apiService } from '../services/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  constructor(private apiservice:apiService, private router: Router) { }
  
  ngOnInit(): void {}
  
  display: boolean = false;
  myusername: string="";
  mypassword: string="";
  msg:string="";
  answer:any="";
  url:string="http://localhost:8080";

  onclick()
  {
    console.log(this.myusername);
    console.log(this.mypassword);
    if(this.myusername=="" || this.mypassword=="" )
    {
      this.msg="Username or password is empty";
    }
    else 
    {
       this.apiservice.getlogin(this.myusername,this.mypassword)
       .subscribe
       (
         data=>
         {
           this.answer=data;
           console.log(this.answer);
           if(this.answer=="Logged In")
           {
             sessionStorage.setItem("username",this.myusername);
             this.router.navigateByUrl("/jobs");
           }
           else
           {
             this.msg="Wrong username or password";
           }
         },
         error=>
         {
           console.log(error);
           this.msg="Error";
         }
       );
    }
    
  }

  checkLoggedIn() : boolean
  {
    if(sessionStorage.getItem("username")==null)
    {
      return false;
    }
    else 
    return true;
  }
}

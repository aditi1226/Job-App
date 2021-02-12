import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiService } from '../services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstname : string ="";
  secondname : string="";
  email : string="";
  phno : string ="";
  mypassword : string ="";
  signup:string="";
  msg:string="";
  constructor(private router: Router,private api:apiService) { }

  ngOnInit(): void {
  }
  onclick()
  {
    if(!(this.firstname=="" || this.email=="" || this.mypassword==""))
    {

    this.signup="{ \"firstName\": \""+this.firstname+"\", \"lastName\": \""+this.secondname+"\", \"emailId\": \""+this.email+"\", \"password\": \""+this.mypassword+"\", \"phoneNo\": \""+this.phno+"\" }";
      console.log(this.signup);  
    this.api.signup(JSON.parse(this.signup)).subscribe(
      data=>
      {
        this.msg=data;
      },
      error=>{
        this.msg="error";
      }
    );
    sessionStorage.setItem("username",this.email);
    this.router.navigateByUrl("/about");
    }
    else
    {
      this.msg="Firstname or email or password is empty ";
    }
  }
}

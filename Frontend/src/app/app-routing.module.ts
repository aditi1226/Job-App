import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { GetJobComponent } from './get-job/get-job.component';
import { JobPageComponent } from './job-page/job-page.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ShowprofileComponent } from './showprofile/showprofile.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'',component:AboutusComponent},
  {path:'about',component:AboutusComponent},
  {path:'getjob',component:GetJobComponent},
  {path:'showprofile',component:ShowprofileComponent},
  {path:'logout',component:LogoutComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'jobs',component:JobPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[AboutusComponent,LoginComponent,SignupComponent,JobPageComponent]

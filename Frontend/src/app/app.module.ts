import { ApplicationModule, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { JobPageComponent } from './job-page/job-page.component';
import { TableModule } from 'primeng/table';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HttpClientModule } from '@angular/common/http';
import {apiService} from 'd:/windows E/Job App/JobApp/src/app/services/api.service';
import { LogoutComponent } from './logout/logout.component';
import { GetJobComponent } from './get-job/get-job.component';
import { ShowprofileComponent } from './showprofile/showprofile.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import {TabMenuModule} from 'primeng/tabmenu';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    JobPageComponent,
    AboutusComponent,
    LogoutComponent,
    GetJobComponent,
    ShowprofileComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CalendarModule,
    ButtonModule,
    MenubarModule,
    DialogModule,
    TableModule,
    HttpClientModule,
    DropdownModule,
    TabMenuModule,
    MenubarModule
  ],
  providers: [apiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

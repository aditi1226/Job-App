import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
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

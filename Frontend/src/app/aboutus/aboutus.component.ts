import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotologin()
  {
    this.router.navigate(["login"]);
  }

}

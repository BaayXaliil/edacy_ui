import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  sidebar: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.router.url);
    
    if (this.router.url == "/overview" || this.router.url == "/billing") {
      this.sidebar = true;
      console.log(this.sidebar)
    }
  }
}

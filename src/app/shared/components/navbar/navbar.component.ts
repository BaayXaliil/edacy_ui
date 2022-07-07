import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  platform = false;
  alert = false;

  constructor(private route: Router) { }

  ngOnInit(): void {
    if (this.route.url == "/company") {
      this.platform = this.alert = true;
    }
  }

  toggleAlert() {
    this.alert = !this.alert;
  }

}

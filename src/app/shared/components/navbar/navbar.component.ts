import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() 
  togglePadding: EventEmitter<boolean> = new EventEmitter<boolean>()
  platform = false;
  alert = false;
  sidebar: boolean = false;
  overview = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.router.url == "/company") {
      this.platform = this.alert = true;
    }
    if (this.router.url == "/overview") {
      this.platform = this.alert = this.sidebar = this.overview = true;
    }
    if (this.router.url == "/billing") {
      this.platform = this.sidebar = true;
    }
  }

  toggleAlert() {
    this.alert = !this.alert;
    // On émit l'évenement pour changer le padding du ".container" parent
    this.togglePadding.emit(this.alert)
  }

}

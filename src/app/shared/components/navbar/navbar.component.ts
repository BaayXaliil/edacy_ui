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

  constructor(private route: Router) { }

  ngOnInit(): void {
    if (this.route.url == "/company") {
      this.platform = this.alert = true;
    }
  }

  toggleAlert() {
    this.alert = !this.alert;
    // On émit l'évenement pour changer le padding du ".container" parent
    this.togglePadding.emit(this.alert)
  }

}

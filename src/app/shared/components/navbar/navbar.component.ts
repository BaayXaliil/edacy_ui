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
  overviewActive = false;
  settingActive = false;
  customizeActive = false;
  integrationActive = false;
  helpActive = false;
  div: HTMLElement | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
    switch (this.router.url) {
      case "/overview":
        this.overviewActive = true;        
        break;
      case "/customize":
        this.customizeActive = true
        break;
      case "/billing":
        this.settingActive = true
        break;
      case "/integration":
        this.integrationActive = true
        break;
      default:
        this.overviewActive = true
        break;
    }

    if (this.router.url == "/company") {
      this.platform = this.alert = true;
    }
    if (this.router.url == "/overview") {
      this.platform = this.alert = this.sidebar = this.overview = true;
    }
    if (this.router.url == "/billing") {
      this.platform = this.sidebar = true;
    }
    if (this.router.url == "/select-domain") {
      this.platform = true;
    }
  }

  toggleAlert() {
    this.alert = !this.alert;
    // On émit l'évenement pour changer le padding du ".container" parent
    this.togglePadding.emit(this.alert)
  }

  onSidebarChange(event: any) {
    event.target.parentNode.parentNode.classList.toggle("show")
    event.target.parentNode.parentNode.parentNode.parentNode?.classList.toggle("body-pd")
    event.target.parentNode.parentNode.parentNode.parentNode?.lastElementChild?.classList.toggle('sidebar_show')
    //     $("#header").toggleClass('body-pd');
  }
}

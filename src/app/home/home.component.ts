import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  monthly: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onChange(e: any) {
    this.monthly = e.target.checked;
    
  }
}

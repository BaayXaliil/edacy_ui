import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  showPassword: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onShowPassword() {
    this.showPassword = !this.showPassword;
  }

}

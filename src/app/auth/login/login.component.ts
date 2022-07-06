import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showPassword: boolean = false;
  err_pwd: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onShowPassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    this.err_pwd = !this.err_pwd;
  }

}

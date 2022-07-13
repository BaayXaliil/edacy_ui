import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PersonalizeComponent } from './company/personalize/personalize.component';
import { ColorChromeModule } from 'ngx-color/chrome';
import { FormsModule } from '@angular/forms';
import { OverviewComponent } from './company/overview/overview.component';
import { BillingComponent } from './company/billing/billing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    PersonalizeComponent,
    OverviewComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorChromeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

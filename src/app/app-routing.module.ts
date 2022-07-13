import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BillingComponent } from './company/billing/billing.component';
import { OverviewComponent } from './company/overview/overview.component';
import { PersonalizeComponent } from './company/personalize/personalize.component';
import { SelectDomainComponent } from './company/select-domain/select-domain.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: "/home" },
  { path: "home", component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'company', component: PersonalizeComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'select-domain', component: SelectDomainComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

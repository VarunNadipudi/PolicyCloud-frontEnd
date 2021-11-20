import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { PoliciesComponent } from './policies/policies.component';
import { PricingComponent } from './pricing/pricing.component';
import { SignupGitHubComponent } from './signup-git-hub/signup-git-hub.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', redirectTo:"/login", pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'policies', component:PoliciesComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'signupGitHub', component:SignupGitHubComponent},
  {path:'pricing', component:PricingComponent},
  {path:'**', component:NoPageFoundComponent}
];
let strUrlForSignup = "signupGitHub";

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

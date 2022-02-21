import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "", redirectTo: "nav-bar", pathMatch:"full"},
  {path: "nav-bar", component: NavBarComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "jumbotron", component: JumbotronComponent},
  {path: "contact", component: ContactComponent},
  {path: "about", component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

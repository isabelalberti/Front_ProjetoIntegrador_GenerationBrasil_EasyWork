import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { CardDeleteComponent } from './delete/card-delete/card-delete.component';
import { SkillDeleteComponent } from './delete/skill-delete/skill-delete.component';
import { CardEditComponent } from './edit/card-edit/card-edit.component';
import { HomeComponent } from './home/home.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { LoginComponent } from './login/login.component';
import { NavBarInternalComponent } from './nav-bar-internal/nav-bar-internal.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardPostComponent } from './post/card-post/card-post.component';
import { SkillPostComponent } from './post/skill-post/skill-post.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: '', redirectTo: 'nav-bar', pathMatch: 'full' },
    { path: 'nav-bar', component: NavBarComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'jumbotron', component: JumbotronComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'card', component: CardPostComponent },
    { path: 'edit-card/:id', component: CardEditComponent },
    { path: 'delete-card/:id', component: CardDeleteComponent },
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'nav-bar-internal', component: NavBarInternalComponent },
    { path: 'skill-post', component: SkillPostComponent },
    { path: 'skill-delete', component: SkillDeleteComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

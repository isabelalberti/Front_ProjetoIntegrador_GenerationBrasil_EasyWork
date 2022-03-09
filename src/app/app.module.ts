import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //Funcionar os metodos http
import { FormsModule } from '@angular/forms'; //Funciona o ngModule
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { CardPostComponent } from './post/card-post/card-post.component';
import { CardEditComponent } from './edit/card-edit/card-edit.component';
import { CardDeleteComponent } from './delete/card-delete/card-delete.component';
import { MuralComponent } from './mural/mural.component';
import { HomeComponent } from './home/home.component';
import { NavBarInternalComponent } from './nav-bar-internal/nav-bar-internal.component';
import { SkillPostComponent } from './post/skill-post/skill-post.component';
import { SkillDeleteComponent } from './delete/skill-delete/skill-delete.component';
import { AlertComponent } from './alert/alert.component';
import { UserComponent } from './edit/user/user.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        LoginComponent,
        JumbotronComponent,
        FooterComponent,
        RegisterComponent,
        AboutUsComponent,
        ContactComponent,
        ProfileComponent,
        CardPostComponent,
        CardEditComponent,
        CardDeleteComponent,
        MuralComponent,
        HomeComponent,
        NavBarInternalComponent,
        SkillPostComponent,
        SkillDeleteComponent,
        AlertComponent,
        UserComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

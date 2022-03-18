import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from './service/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title(title: any) {
        throw new Error('Method not implemented.');
    }
    constructor(public auth: AuthService,private router: Router) {}

    ngOnInit() {
        window.scroll(0, 0);        
    }
}

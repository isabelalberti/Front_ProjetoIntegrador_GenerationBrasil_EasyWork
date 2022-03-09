import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
    selector: 'app-nav-bar-internal',
    templateUrl: './nav-bar-internal.component.html',
    styleUrls: ['./nav-bar-internal.component.css'],
})
export class NavBarInternalComponent implements OnInit {
    nome = environment.fullName;
    foto = environment.picture;

    constructor(private router: Router) {}

    ngOnInit() {
        if (environment.token == '') {
            this.router.navigate(['/login']);
        }
    }

    sair() {
        this.router.navigate(['/login']);
        environment.token = '';
        environment.fullName = '';
        environment.picture = '';
        environment.id = 0;
    }
}

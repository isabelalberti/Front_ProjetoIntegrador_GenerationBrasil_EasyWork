import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserSecurityLogin } from '../model/UserSecurityLogin';
import { AuthService } from '../service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    userSLogin: UserSecurityLogin = new UserSecurityLogin();

    constructor(private auth: AuthService, private router: Router) {}

    ngOnInit() {
        window.scroll(0, 0);
    }

    login() {
        this.auth.login(this.userSLogin).subscribe({
            next: (resp: UserSecurityLogin) => {
                this.userSLogin = resp;

                environment.fullName = this.userSLogin.fullName;
                environment.email = this.userSLogin.email;
                environment.token = this.userSLogin.token;
                environment.id = this.userSLogin.id;
                environment.picture = this.userSLogin.picture;
                environment.type = this.userSLogin.type;
                environment.city = this.userSLogin.city;

                console.log(environment);

                this.router.navigate(['/nav-bar-internal']);
            },

            error: (erro) => {
                if (erro.status == 500) {
                    alert('Usuário inexistente!');
                } else if (erro.status == 400) {
                    alert('Senha Inválida!');
                } else {
                    alert('Erro Genérico!');
                }
            },
        });
    }
}

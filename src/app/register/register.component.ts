import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AlertService } from '../service/alert.service';
import { AuthService } from '../service/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
    user: User = new User();

    confPassword: string;
    gen: string;
    userType: string;

    constructor(private auth: AuthService, private router: Router) { }

    ngOnInit() {
        window.scroll(0, 0);
    }

    confirmPassword(event: any) {
        this.confPassword = event.target.value;
    }

    gender(event: any) {
        this.gen = event.target.value;
    }

    typeUser(event: any) {
        this.userType = event.target.value;
    }

    register() {
        this.user.gender = this.gen
        this.user.type = this.userType

        if (this.confPassword != this.user.password) {
            alert('As senhas não conferem!\nDigite novamente');
        } else {
            this.auth.register(this.user).subscribe((resp: User) => {
                this.user = resp;
                this.router.navigate(['/login']);
                alert('Usuário cadastrado com sucesso!');

            });
        }
    }

    validEmail() {
        let regex = /.+\@.+\..+/
        if (this.user.email.indexOf("@") != -1 && this.user.email.indexOf(".") != -1) {
            let email = (<HTMLDivElement>document.getElementById('email'))
            // email.innerHTML = (255 - this.user.email.length).toString()
            email.innerHTML = "Email válido"
            email.style.color = "green"
        } else {
            let email = (<HTMLDivElement>document.getElementById('email'))
            email.innerHTML = 'Email inválido'
            email.style.color = "red"
        }
    }

    validName() {
        let regex = /.+\@.+\..+/
        if (this.user.fullName.length < 3) {
            let name = (<HTMLDivElement>document.getElementById('nome'))
            // email.innerHTML = (255 - this.user.email.length).toString()
            name.innerHTML = "Mínimo 3 caracteres!"
            name.style.color = "red"
        } else {
            let name = (<HTMLDivElement>document.getElementById('nome'))
            name.innerHTML = ''            
        }
    }

    validPassword() {
        let regex = /.+\@.+\..+/
        if (this.confPassword.length < 6) {
            let password = (<HTMLDivElement>document.getElementById('senha'))
            // email.innerHTML = (255 - this.user.email.length).toString()
            password.innerHTML = "Mínimo 6 caracteres!"
            password.style.color = "red"
        } else {
            let password = (<HTMLDivElement>document.getElementById('senha'))
            password.innerHTML = ''            
        }
    }

    validConfPassword() {
        let regex = /.+\@.+\..+/
        if (this.user.password.length < 6) {
            let confirPassword = (<HTMLDivElement>document.getElementById('confirmSenha'))
            // email.innerHTML = (255 - this.user.email.length).toString()
            confirPassword.innerHTML = "Mínimo 6 caracteres!"
            confirPassword.style.color = "red"
        } else {
            let confirPassword = (<HTMLDivElement>document.getElementById('confirmSenha'))
            confirPassword.innerHTML = ''            
        }
    }
}

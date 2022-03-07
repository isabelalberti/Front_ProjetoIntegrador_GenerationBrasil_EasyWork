import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

    user: User = new User
    confPassword: string

    constructor(
        private auth: AuthService,
        private router: Router
    ) {}

    ngOnInit() {
        window.scroll(0, 0);
    }

    confirmPassword(event: any){
        this.confPassword = event.target.value
    }

    register(){
        if (this.confPassword != this.user.password){
            alert("As senhas não conferem!\nDigite novamente")
        } else {
            this.auth.register(this.user).subscribe((resp: User) => {
                this.user = resp
                this.router.navigate(['/login'])
                alert("Usuário cadastrado com sucesso!")
            })
        }
    }
}

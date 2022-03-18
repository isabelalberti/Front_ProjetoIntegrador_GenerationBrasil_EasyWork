import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AlertService } from 'src/app/service/alert.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
    user: User = new User();
    idUser: number;

    confPassword: string;
    gen: string;
    userType: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        public authService: AuthService,
        private alerts: AlertService //private alert: AlertService
    ) {}

    ngOnInit() {
        if (environment.token == '') {
            alert(
                'Sua seção expirou para sua segurança! Faça o login novamente!'
            );
            this.router.navigate(['/login']);
        }

        window.scroll(0, 0);

        this.authService.refreshToken();
        this.idUser = this.route.snapshot.params['id'];
        this.findByIdUser(this.idUser);
    }

    confirmPassword(event: any) {
        this.confPassword = event.target.value;
    }

    gender(event: any) {
        this.gen = event.target.value;
    }
    

    findByIdUser(id: number) {
        this.authService.getByIdUser(id).subscribe((resp: User) => {
            this.user = resp;
        });
    }

    updateUser() {
        console.log("ola mundo")
        this.user.type
        this.user.id = this.idUser
        this.user.gender = this.gen

        console.log(this.user);
        if (this.confPassword != this.user.password) {
            alert('As senhas não conferem!\nDigite novamente');
        } else {
            console.log("ola mundo")

            this.authService.putUser(this.user).subscribe((resp: User) => {
                console.log(resp);
                this.user = resp;

                alert(
                    'Usuário atualizado com sucesso! Faça o login novamente, por favor.'
                );

                environment.token = '';
                environment.fullName = '';
                environment.picture = '';
                environment.id = 0;

                this.router.navigate(['/login']);
            });
        }
    }
}

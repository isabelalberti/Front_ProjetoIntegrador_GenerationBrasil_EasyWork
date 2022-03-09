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
    fullName = environment.fullName;
    city = environment.city;
    email = environment.email;
    phone = environment.phone;

    idUser: number;
    confirmarPassword: string;
    gen: string;

    userEdit: User = new User();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authService: AuthService //private alert: AlertService
    ) {}

    ngOnInit() {
        window.scroll(0, 0);
        this.authService.refreshToken(); //

        this.idUser = this.route.snapshot.params['id'];
    }

    validatePreenchido() {
        let usuario = <HTMLInputElement>document.getElementById('email');
        if (usuario?.value != '') {
            usuario.classList.add('preenchido');
        } else {
            usuario.classList.remove('preenchido');
        }
    }

    confirmPassword(event: any) {
        this.confirmarPassword = event.target.value;
    }

    genero(event: any) {
        this.gen = event.target.value;
    }

    atualizar() {
        this.userEdit.genero = this.gen;

        if (this.userEdit.password.length < 6) {
            // this.alert.showAlertInfo("A senha deve conter no minimo 8 caracteres.");
        } else {
            if (this.userEdit.password != this.confirmarPassword) {
                // this.alert.showAlertInfo("As senhas estão diferentes.");
            } else {
                this.authService
                    .putUser(this.userEdit)
                    .subscribe((resp: User) => {
                        this.userEdit = resp;

                        this.router.navigate(['/inicio']);
                        // this.alert.showAlertInfo("Usuário editado com sucesso! Faça seu login")

                        environment.token = '';
                        environment.fullName = '';
                        environment.picture = '';
                        environment.id = 0;
                        this.router.navigate(['/login']);
                    });
            }
        }
    }
}

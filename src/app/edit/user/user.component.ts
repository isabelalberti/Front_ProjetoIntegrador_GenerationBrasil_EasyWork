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
    idUser: number

    confPassword: string;
    gen: string;
    userType: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        public authService: AuthService //private alert: AlertService
    ) {}

    ngOnInit() {
        if(environment.token == ""){
            this.router.navigate(["/login"])
        }

        window.scroll(0, 0);
        
        this.idUser = this.route.snapshot.params["id"]
        this.findByIdUser(this.idUser)
    }

    confirmPassword(event: any) {
        this.confPassword = event.target.value;
    }

    genero(event: any) {
        this.gen = event.target.value;
    }

    typeUser(event: any) {
        this.userType = event.target.value;
    }

    findByIdUser(id: number){
        this.authService.getByIdUser(id).subscribe((resp: User) => {
            this.user = resp
        })
    }

    updateUser(){
        this.user.type = this.userType

        if (this.confPassword != this.user.password) {
            alert('As senhas não conferem!\nDigite novamente');
        } else {
            this.authService.putUser(this.user).subscribe((resp: User) => {
                this.user = resp;

                alert("Usuário atualizado com sucesso! Faça o login novamente, por favor.")                

                environment.token = ""
                environment.fullName = ""
                environment.picture = ""
                environment.id = 0

                this.router.navigate(['/login']);
            });
        }
    }
}

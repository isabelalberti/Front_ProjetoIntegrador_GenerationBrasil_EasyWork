import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Card } from '../model/Card';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { CardService } from '../service/card.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
    idUser : number;

    picture = environment.picture;
    fullName = environment.fullName;

    idCard: number;
    descric: string;

    cardList: Card[];

    user: User = new User();
    card: Card = new Card();

    constructor(
        private router: Router,
        public authService: AuthService,
        private cardService: CardService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        window.scroll(0, 0);

        this.authService.refreshToken();
        this.idUser = this.route.snapshot.params['id']
        this.getByIdUser(this.idUser);
        // this.putDescription()
        console.log("O idUSer vale: " + this.idUser)
    }

    descricao(event: any) {
        this.descric = event.target.value;
    }

    getByIdUser(id: number) {
        this.authService.getByIdUser(id).subscribe((resp: User) => {
            this.user = resp;
        });
    }

    findByIdCard(id: number) {
        this.cardService.getByIdCard(id).subscribe((resp: Card) => {
            this.card = resp;
        });
    }

    putDescription(id: number) {
        this.cardService.getByIdCard(id).subscribe((resp: Card) => {
            this.card = resp;
            console.log(this.card);
            this.card.description = this.descric;

            this.cardService.putCard(this.card).subscribe((resp: Card) => {
                this.card = resp;
                this.router.navigate(['/profile']);
                alert('Descrição cadastrada com sucesso!');
            });
        });
    }

    updateBio() {
        this.user.id = this.idUser
        this.user.email = environment.email        

        this.authService.putBio(this.user).subscribe({
            next: (resp: User) => {
            this.user = resp;
            alert(
                'Sobre mim atualizado com sucesso!'
            );
        },
        error: (erro) =>{
            if(erro.status == 400){
                alert("Senha incorreta!")
            } else {
                alert("Faça o login para alterar!")   
                this.router.navigate(["/profile", this.idUser])             
            }
        },
    });
    }

    
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    idUser = environment.id;
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
        private cardService: CardService
    ) {}

    ngOnInit() {
        window.scroll(0, 0);
        this.authService.refreshToken();

        this.getByIdUser();
        // this.putDescription()
    }

    descricao(event: any) {
        this.descric = event.target.value;
    }

    getByIdUser() {
        this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
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
}

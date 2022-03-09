import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/model/Card';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { CardService } from 'src/app/service/card.service';
import { environment } from 'src/environments/environment.prod';

@Component({
    selector: 'app-card-post',
    templateUrl: './card-post.component.html',
    styleUrls: ['./card-post.component.css'],
})
export class CardPostComponent implements OnInit {
    user: User = new User();
    idUser = environment.id;

    card: Card = new Card();
    tip: string;

    constructor(private router: Router, private cardService: CardService) {}

    ngOnInit() {
        window.scroll(0, 0);
        if (environment.token == '') {
            this.router.navigate(['/login']);
        }
        this.cardService.refreshToken();
    }

    publish() {
        this.user.id = this.idUser;
        this.card.user = this.user;
        

        console.log(this.card);
        this.cardService.postCard(this.card).subscribe((resp: Card) => {
            this.card = resp;

            alert('Card Postado com Sucesso');

            this.card = new Card();
        });
    }

    changeTip(event: any) {
        this.tip = event.target.value;
    }
}

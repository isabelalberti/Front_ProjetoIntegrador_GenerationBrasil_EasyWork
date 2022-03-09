import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/model/Card';
import { CardService } from 'src/app/service/card.service';
import { environment } from 'src/environments/environment.prod';

@Component({
    selector: 'app-card-delete',
    templateUrl: './card-delete.component.html',
    styleUrls: ['./card-delete.component.css'],
})
export class CardDeleteComponent implements OnInit {
    card: Card = new Card();
    idCard: number;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private cardService: CardService
    ) {}

    ngOnInit() {
        window.scroll(0, 0);

        if (environment.token == '') {
            this.router.navigate(['/login']);
        }

        this.idCard = this.route.snapshot.params['id'];
        this.findByIdCard(this.idCard);
    }

    findByIdCard(id: number) {
        this.cardService.getByIdCard(id).subscribe((resp: Card) => {
            this.card = resp;
        });
    }

    delete() {
        this.cardService.deleteCard(this.idCard).subscribe(() => {
            alert('Card deletado com sucesso!');
            this.router.navigate(['/home']);
        });
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/model/Card';
import { User } from 'src/app/model/User';
import { CardService } from 'src/app/service/card.service';
import { SkillService } from 'src/app/service/skill.service';
import { environment } from 'src/environments/environment.prod';

@Component({
    selector: 'app-card-edit',
    templateUrl: './card-edit.component.html',
    styleUrls: ['./card-edit.component.css'],
})
export class CardEditComponent implements OnInit {
    card: Card = new Card();

    tip: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private cardService: CardService,
        private skillService: SkillService
    ) {}

    ngOnInit() {
        if (environment.token == '') {
            this.router.navigate(['/login']);
        }

        let id = this.route.snapshot.params['id'];
        this.findByIdCard(id);
    }

    changeTip(event: any) {
        this.tip = event.target.value;
    }

    findByIdCard(id: number) {
        this.cardService.getByIdCard(id).subscribe((resp: Card) => {
            this.card = resp;
        });
    }

    update() {
        this.card.option = this.tip;

        if (this.tip == 'Profissional') {
            this.card.institution = '';
            this.card.formation = '';
            this.card.image = '';
        } else {
            this.card.companyName = '';
            this.card.occupation = '';
        }

        this.cardService.putCard(this.card).subscribe((resp: Card) => {
            this.card = resp;
            alert('Alterado com sucesso!');
            this.router.navigate(['/home']);
        });
    }
}

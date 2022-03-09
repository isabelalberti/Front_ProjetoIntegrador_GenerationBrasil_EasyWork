import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/model/Card';
import { Skill } from 'src/app/model/Skill';
import { User } from 'src/app/model/User';
import { CardService } from 'src/app/service/card.service';
import { environment } from 'src/environments/environment.prod';
import { SkillService } from 'src/app/service/skill.service';

@Component({
    selector: 'app-card-post',
    templateUrl: './card-post.component.html',
    styleUrls: ['./card-post.component.css'],
})
export class CardPostComponent implements OnInit {
    user: User = new User();
    idUser = environment.id;

    skill: Skill = new Skill();

    card: Card = new Card();

    tipCard: string;

    tipSkill: string;

    tipNivel: string;

    idCard: number;

    constructor(
        private router: Router,
        private cardService: CardService,
        private skillService: SkillService
    ) {}

    ngOnInit() {
        window.scroll(0, 0);
        if (environment.token == '') {
            this.router.navigate(['/login']);
        }
        this.cardService.refreshToken();
        this.skillService.refreshToken();
    }

    changeTip(event: any) {
        this.tipCard = event.target.value;
    }

    changeSkill(event: any) {
        this.tipSkill = event.target.value;
    }

    changeNivel(event: any) {
        this.tipNivel = event.target.value;
        console.log(this.tipNivel);
    }

    publish() {
        this.user.id = this.idUser;
        this.card.user = this.user;

        this.card.option = this.tipCard;

        if (this.tipCard == 'Profissional') {
            this.card.institution = '';
            this.card.formation = '';
            this.card.image = '';
        } else {
            this.card.companyName = '';
            this.card.occupation = '';
        }

        this.cardService.postCard(this.card).subscribe((resp: Card) => {
            this.card = resp;
            this.idCard = this.card.id;
            console.log(this.card);

            this.skill.card = this.card;
            this.skill.nivel = this.tipNivel;

            this.skillService.postSkill(this.skill).subscribe((resp: Skill) => {
                this.skill = resp;
            });

            this.card = new Card();
            this.skill = new Skill();
            alert('Card Postado com Sucesso');
        });
    }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/model/Card';
import { Skill } from 'src/app/model/Skill';
import { User } from 'src/app/model/User';
import { CardService } from 'src/app/service/card.service';
import { environment } from 'src/environments/environment.prod';
import { SkillService } from 'src/app/service/skill.service'

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

    constructor(private router: Router, private cardService: CardService, private skillService: SkillService, ) {}

    ngOnInit() {
        window.scroll(0, 0);
        if (environment.token == '') {
            this.router.navigate(['/home']);
        }
        this.cardService.refreshToken();
    }

    publish() {
        this.user.id = this.idUser;
        this.card.user = this.user;

        this.skill.card = this.card;

        console.log(this.card);
        this.cardService.postCard(this.card).subscribe((resp: Card) => {
            this.card = resp;

            alert('Card Postado com Sucesso');

            this.card = new Card();
        });

        this.skillService.postSkill(this.skill).subscribe((resp: Skill) => {
            this.skill = resp;
        });
    }

    changeTip(event: any) {
        this.tipCard = event.target.value;
    }

    changeSkill(event: any) {
        this.tipSkill = event.target.value;
    }
}

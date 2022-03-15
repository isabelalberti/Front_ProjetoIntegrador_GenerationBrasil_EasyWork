import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Card } from '../model/Card';
import { Skill } from '../model/Skill';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

import { CardService } from '../service/card.service';
import { SkillService } from '../service/skill.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    cardList: Card[];
    card: Card = new Card();

    skillList: Skill[];
    skill: Skill = new Skill();

    skillType: string;
    nivel: string;
    cardId: number = 1;

    user: User = new User();
    idUser = environment.id;

    constructor(
        private router: Router,
        private cardService: CardService,
        private skillService: SkillService,
        private authService: AuthService
    ) {}

    ngOnInit() {
        window.scroll(0, 0);

        if (environment.token == '') {
            this.router.navigate(['/login']);
        }

        this.cardService.refreshToken();
        this.authService.refreshToken();
        this.getAllCard();
        this.getAllSkill();
        this.findByIdUser();
    }

    choiceSkill(event: any) {
        this.skillType = event.target.value;
    }

    choiceNivel(event: any) {
        this.nivel = event.target.value;
    }

    getAllCard() {
        this.cardService.getAllCard().subscribe((resp: Card[]) => {
            this.cardList = resp;
        });
    }

    getAllSkill() {
        this.skillService.getAllSkill().subscribe((resp: Skill[]) => {
            this.skillList = resp;
            console.log(this.skillList);
        });
    }

    clear() {
        return (this.skillType = 'escolha');
    }

    publish() {
        this.skill.nivel = this.nivel;
        this.card.id = this.cardId;
        this.skill.card = this.card;

        this.skillService.postSkill(this.skill).subscribe((resp: Skill) => {
            this.skill = resp;

            alert('Habilidade criado com sucesso!');

            this.skill = new Skill();
            this.findByIdUser();
        });
    }

    findByIdUser() {
        this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
            this.user = resp;
        });
    }

    endDate(card: Card) {
        let ok = false;
        if (card.endDate != null) {
            ok = true;
        }
        return ok;
    }

    technicalSkill(x: string) {
        let ok = false;

        if (x != '' || x != null) {
            ok = true;
        }
        return ok;
    }

    test(skill: Skill) {
        let ok = false;

        if (skill == null) {
            ok = true;
        }
        return ok;
    }

    // x() {
    //     if (this.card.option == 'Education') {
    //         return 'Imagem: ';
    //     } else {
    //         return '';
    //     }
    // }
    // imagem = 'Imagem: ';
    // formacao = 'Formação: ';
    // instituicao = 'Instituição: ';
    // cargo = 'Cargo: ';
    // nomeEmpresa = 'Nome da empresa: ';

    // education() {
    //     let ok: boolean = true;

    //     if (
    //         this.card.formation == 'nada' &&
    //         this.card.image == 'nada' &&
    //         this.card.institution == 'nada'
    //     ) {
    //         this.card.formation = ''
    //         this.card.image = ''
    //         this.card.institution = ''
    //         ok = false;
    //     }
    //     return ok;
    // }

    // professional() {
    //     let ok: boolean = true;

    //     if (this.card.companyName == 'nada' && this.card.occupation == 'nada') {
    //         this.card.companyName = ''
    //         this.card.occupation = ''
    //         ok = false;
    //     }
    //     return ok;
    // }
}

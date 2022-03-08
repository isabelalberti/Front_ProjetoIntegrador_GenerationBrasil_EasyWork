import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertComponent } from 'src/app/alert/alert.component';
import { Skill } from 'src/app/model/Skill';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { SkillService } from 'src/app/service/skill.service';
import { environment } from 'src/environments/environment.prod';

@Component({
    selector: 'app-skill-post',
    templateUrl: './skill-post.component.html',
    styleUrls: ['./skill-post.component.css'],
})
export class SkillPostComponent implements OnInit {
    user: User = new User();
    idUser = environment.id;
    idPost: number;

    skill: Skill = new Skill();

    constructor(
        private router: Router,
        private skillService: SkillService,
        private auth: AuthService,
        private alert: AlertComponent
    ) {}

    ngOnInit() {
        window.scroll(0, 0);
        if (environment.token == '') {
            this.router.navigate(['/home']);
        }
        this.skillService.refreshToken();
    }

    publish() {
        this.user.id = this.idUser;

        this.skillService.postSkill(this.skill).subscribe((resp: Skill) => {
            this.skill = resp;

            alert('Skill Postada com Sucesso');

            this.skill = new Skill();
        });
    }

    deleteSkill() {
        this.skillService.deleteSkill(this.idPost).subscribe(() => {
            this.alert.showAlertSuccess('Postagem apagada com sucesso!');
            this.router.navigate(['/inicio']);
        });
    }
}

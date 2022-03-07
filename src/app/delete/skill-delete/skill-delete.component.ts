import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/model/Card';
import { Skill } from 'src/app/model/Skill';
import { SkillService } from 'src/app/service/skill.service';
import { environment } from 'src/environments/environment.prod';
import { AlertService } from 'src/app/service/alert.service';

@Component({
  selector: 'app-skill-delete',
  templateUrl: './skill-delete.component.html',
  styleUrls: ['./skill-delete.component.css']
})
export class SkillDeleteComponent implements OnInit {
  skill: Skill = new Skill();

  card: Card = new Card();
  listaCard: Card[];
  idPost: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private skillService: SkillService,
    private alerta: AlertService
  ) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    if (environment.token == '') {
      this.router.navigate(['/login']);
    }
    this.idPost = this.route.snapshot.params['id'];
    this.findByIdSkill(this.idPost);
  }

  findByIdSkill(id: number) {
    this.skillService.getByIdSkill(id).subscribe((resp: Skill) => {
      this.skill = resp;
    });
  }

  apagar() {
    this.skillService.deleteSkill(this.idPost).subscribe(() => {
      this.alerta.showAlertSuccess('Skill apagada com sucesso!');
      this.router.navigate(['/inicio']);
    });
  }
}

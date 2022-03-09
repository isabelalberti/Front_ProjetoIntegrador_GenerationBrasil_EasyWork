import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Card } from '../model/Card';
import { User} from '../model/User';
import { AuthService } from '../service/auth.service';
import { CardService } from '../service/card.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
<<<<<<< HEAD
  idUser = environment.id
  picture = environment.picture
  fullName = environment.fullName
  city = environment.city
  descricao = environment.description
  github = environment.github
  linkedin = environment.linkedin

  cardList: Card[]

  user: User = new User()

  constructor(
    private router: Router,
    public authService: AuthService,
    private cardService: CardService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    this.authService.refreshToken()

    this.getByIdUser()
  }

  getByIdUser() {
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
    this.user = resp
    })
  }
}
=======
    idUser = environment.id;
    picture = environment.picture;
    fullName = environment.fullName;
    city = environment.city;
    temaFormation = environment.temaFormation;
    description = environment.descriptionFormation;
    github = environment.github;
    linkedin = environment.linkedin;

    constructor(private router: Router, public authService: AuthService) {}

    ngOnInit() {
        window.scroll(0, 0);
        this.authService.refreshToken();
    }
}
>>>>>>> b8fa3037c90a81618c077a5cccd135962b00e520

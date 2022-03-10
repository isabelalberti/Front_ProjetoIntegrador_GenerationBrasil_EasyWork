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
  idUser = environment.id
  picture = environment.picture
  fullName = environment.fullName
  city = environment.city
  github = environment.github
  linkedin = environment.linkedin
  description = environment.description

  idCard: number
  descric:string
  
  cardList: Card[]

  user: User = new User()
  card: Card = new Card()
  
  //descricao: Descricao = new descricao()
  
    
  constructor(
    private router: Router,
    public authService: AuthService,
    private cardService: CardService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    this.authService.refreshToken()

    this.getByIdUser()
   // this.putDescription()
  }

  descricao(event: any) {
    this.descric = event.target.value;
}

  getByIdUser() {
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
    this.user = resp
    })
  }
  
  
  putDescription() {
    this.cardService.putDescription(this.description).subscribe((resp: Card) => {
            this.card = resp;
            this.router.navigate(['/profile']);
            alert('Descrição cadastrada com sucesso!');
        });
    }
} 

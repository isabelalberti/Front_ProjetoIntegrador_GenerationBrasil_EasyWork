import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
=======
import { environment } from 'src/environments/environment.prod';
import { Card } from '../model/Card';
>>>>>>> e7e9d0ec55c0b648067b2f91c18c6ef3be55036e
import { CardService } from '../service/card.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

    cardList: Card[]

    constructor(
        private router: Router,
        private cardService: CardService
    ) { }

<<<<<<< HEAD
    ngOnInit() {
        window.scroll(0, 0)

    }

    getAllCard() {

    }
}
=======
   

>>>>>>> e7e9d0ec55c0b648067b2f91c18c6ef3be55036e

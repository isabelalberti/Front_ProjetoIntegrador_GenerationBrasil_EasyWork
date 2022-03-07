import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../service/card.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    constructor(
        private router: Router,
        private cardService: CardService
    ) { }

    ngOnInit() {
        window.scroll(0, 0)

    }

    getAllCard() {

    }
}

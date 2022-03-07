import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Card } from '../model/Card';

@Injectable({
    providedIn: 'root',
})
export class CardService {
    constructor(private http: HttpClient) {}

    token = {
        headers: new HttpHeaders().set('Authorization', environment.token),
    };

    refreshToken() {
        this.token = {
            headers: new HttpHeaders().set('Authorization', environment.token),
        };
    }

    postCard(card: Card): Observable<Card> {
        return this.http.post<Card>(
            'https://projeto-integrador-grupo2.herokuapp.com/card/insert',
            card,
            this.token
        );
    }

    getAllCard(): Observable<Card[]> {
        return this.http.get<Card[]>(
            'https://projeto-integrador-grupo2.herokuapp.com/card',
            this.token
        );
    }
}
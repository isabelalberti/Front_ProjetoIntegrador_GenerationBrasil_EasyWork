import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Card } from '../model/Card';

@Injectable({
    providedIn: 'root',
})
export class CardService {
    putDescription: any;

    remote : string = "https://projeto-integrador-grupo2.herokuapp.com"
    local : string = "http://localhost:8080"

    constructor(private http: HttpClient) {}

    token = {
        headers: new HttpHeaders().set('Authorization', environment.token),
    };

    refreshToken() {
        this.token = {
            headers: new HttpHeaders().set('Authorization', environment.token),
        };
    }

    getAllCard(): Observable<Card[]> {
        return this.http.get<Card[]>(
            this.remote + '/card',
            this.token
        );
    }

    getByIdCard(id: number): Observable<Card> {
        return this.http.get<Card>(
            `${this.remote}/card/select/${id}`,
            this.token
        );
    }

    getByOption(option: string): Observable<Card[]> {
        return this.http.get<Card[]>(
            `${this.remote}/card/option/${option}`,
            this.token
        );
    }

    postCard(card: Card): Observable<Card> {
        return this.http.post<Card>(
            this.remote + '/card/insert',
            card,
            this.token
        );
    }

    putCard(card: Card): Observable<Card> {
        return this.http.put<Card>(
            this.remote + '/card/update',
            card,
            this.token
        );
    }

    deleteCard(id: number) {
        return this.http.delete(
            `${this.remote}/card/delete/${id}`,
            this.token
        );
    }
}

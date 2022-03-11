import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Skill } from '../model/Skill';

@Injectable({
    providedIn: 'root',
})
export class SkillService {
    [x: string]: any;
    constructor(private http: HttpClient) {}

    token = {
        headers: new HttpHeaders().set('Authorization', environment.token),
    };

    refreshToken() {
        this.token = {
            headers: new HttpHeaders().set('Authorization', environment.token),
        };
    }

    getAllSkill(): Observable<Skill[]> {
        return this.http.get<Skill[]>(
            'https://projeto-integrador-grupo2.herokuapp.com/skill/all',
            this.token
        );
    }

    getByIdSkill(id: number): Observable<Skill> {
        return this.http.get<Skill>(
            'https://projeto-integrador-grupo2.herokuapp.com/skill/${id}',
            this.token
        );
    }

    postSkill(skill: Skill): Observable<Skill> {
        return this.http.post<Skill>(
            'https://projeto-integrador-grupo2.herokuapp.com/skill/insert',
            skill,
            this.token
        );
    }

    putSkill(skill: Skill): Observable<Skill> {
        return this.http.put<Skill>(
            'https://projeto-integrador-grupo2.herokuapp.com/skill/',
            skill,
            this.token
        );
    }

    deleteSkill(id: number) {
        return this.http.delete(
            `https://projeto-integrador-grupo2.herokuapp.com/skill/${id}`,
            this.token
        );
    }
}

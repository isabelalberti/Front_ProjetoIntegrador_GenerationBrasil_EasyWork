import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Skill } from '../model/Skill';

@Injectable({
    providedIn: 'root',
})
export class SkillService {
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
            'https://easyworkgen.herokuapp.com/skill',
            this.token
        );
    }

    getByIdSkill(id: number): Observable<Skill> {
        return this.http.get<Skill>(
            'https://easyworkgen.herokuapp.com/skill/${id}',
            this.token
        );
    }

    postSkill(skill: Skill): Observable<Skill> {
        return this.http.post<Skill>(
            'https://easyworkgen.herokuapp.com/skill/insert',
            skill,
            this.token
        );
    }

    putSkill(skill: Skill): Observable<Skill> {
        return this.http.put<Skill>(
            'https://easyworkgen.herokuapp.com/skill/',
            skill,
            this.token
        );
    }

    deleteSkill(id: number) {
        return this.http.delete(
            `https://easyworkgen.herokuapp.com/skill/${id}`,
            this.token
        );
    }
}

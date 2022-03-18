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

    remote : string = "https://projeto-integrador-grupo2.herokuapp.com"
    local : string = "http://localhost:8080"

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
            this.remote + '/skill/all',
            this.token
        );
    }

    getByIdSkill(id: number): Observable<Skill> {
        return this.http.get<Skill>(
            this.remote + '/skill/${id}',
            this.token
        );
    }

    postSkill(skill: Skill): Observable<Skill> {
        return this.http.post<Skill>(
            this.remote + '/skill/insert',
            skill,
            this.token
        );
    }

    putSkill(skill: Skill): Observable<Skill> {
        return this.http.put<Skill>(
            this.remote + '/skill/',
            skill,
            this.token
        );
    }

    deleteSkill(id: number) {
        return this.http.delete(
            `${this.remote}/skill/${id}`,
            this.token
        );
    }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserSecurityLogin } from '../model/UserSecurityLogin';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

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

    getByIdUser(id: number): Observable<User> {
        return this.http.get<User>(
            `${this.remote}/user/id/${id}`,
            this.token
        );
    }

    login(userSecurityLogin: UserSecurityLogin): Observable<UserSecurityLogin> {
        return this.http.post<UserSecurityLogin>(
            this.remote + '/user/login',
            userSecurityLogin
        );
    }

    putUser(user: User): Observable<User> {
        return this.http.put<User>(
            this.remote + '/user/update',
            user, this.token
        );
    }

    putBio(user: User): Observable<User> {
        return this.http.put<User>(
            this.remote + '/user/updateBio',
            user, this.token
        );
    }

    register(user: User): Observable<User> {
        return this.http.post<User>(
            this.remote + '/user/register',
            user
        );
    }

    logged() {
        let ok: boolean = false;

        if (environment.token != '') {
            ok = true;
        }
        return ok;
    }

    adm() {
        let ok: boolean;

        if (environment.type == 'adm') {
            ok = true;
        } else {
            ok = false;
        }
        return ok;
    }
}

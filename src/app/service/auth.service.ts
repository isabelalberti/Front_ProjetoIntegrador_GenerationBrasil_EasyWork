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
            `https://projeto-integrador-grupo2.herokuapp.com/user/id/${id}`,
            this.token
        );
    }

    login(userSecurityLogin: UserSecurityLogin): Observable<UserSecurityLogin> {
        return this.http.post<UserSecurityLogin>(
            'https://projeto-integrador-grupo2.herokuapp.com/user/login',
            userSecurityLogin
        );
    }

    putUser(user: User): Observable<User> {
        return this.http.put<User>(
            'https://projeto-integrador-grupo2.herokuapp.com/user/alterar',
            user
        );
    }

    register(user: User): Observable<User> {
        return this.http.post<User>(
            'https://projeto-integrador-grupo2.herokuapp.com/user/register',
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

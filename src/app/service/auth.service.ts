import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSecurityLogin } from '../model/UserSecurityLogin';
import { Usuario } from '../model/Usuario';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient

  ) { }


  login(userSecurityLogin: UserSecurityLogin): Observable<UserSecurityLogin>{ 
    return this.http.post<UserSecurityLogin>("https://projeto-integrador-grupo2.herokuapp.com/usuario/logar", userSecurityLogin)
  }
  
    register(user: Usuario): Observable<Usuario>{ 
      return this.http.post<Usuario>("https://projeto-integrador-grupo2.herokuapp.com/usuario/cadastrar", user)

}
}

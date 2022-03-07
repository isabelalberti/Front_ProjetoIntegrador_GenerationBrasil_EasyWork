import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserSecurityLogin } from '../model/UserSecurityLogin';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient

  ) { }


  login(userSecurityLogin: UserSecurityLogin): Observable<UserSecurityLogin>{ 
    return this.http.post<UserSecurityLogin>("https://projeto-integrador-grupo2.herokuapp.com/user/login", userSecurityLogin)
  }
  
    register(user: User): Observable<User>{ 
      return this.http.post<User>("https://projeto-integrador-grupo2.herokuapp.com/user/register", user)

}

logged(){
  let ok: boolean = false

if(environment.token != ''){
ok = true
}
  return ok
}

}

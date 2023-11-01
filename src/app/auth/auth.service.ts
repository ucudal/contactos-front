import { Injectable } from '@angular/core';
import { User } from './interfaces/user.interface';
import { Observable, catchError, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly USER_KEY = "user";

  private baseUrl = "http://jmelnik.ddns.net";
  private user?: User = undefined;

  constructor(
    private http: HttpClient
  ) { }

  get currentUser(): User | undefined {
    // if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  private saveUserToLocalStorage(user: User) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.user = user;
  }

  checkAuthentication(): Observable<boolean> {
    if (!localStorage.getItem(this.USER_KEY)) {
      this.user = undefined
      return of(false)
    }
    
    this.user = JSON.parse( localStorage.getItem(this.USER_KEY)!);

    return of(true);
    //TODO: pegarle al rest a una ruta protegida y consultar el usuario para ver si todavía es válido el ¿token?
    //TODO: Si es valido guardarlo en el local storage
    // const usuarioObtenidoDelRest = {
    //   id: 2,
    //   username: "jmelnik",
    //   email: "jorge.melnik@ucu.edu.uy"
    // }
    // this.saveUserToLocalStorage(usuarioObtenidoDelRest);
    // return of(true);
  }

  doLogin(email: string, password: string): Observable<User> {
    //TODO: Cambiar por post al backend.
    // return this.http.get<User>(`${this.baseUrl}/users/1`)
    //   .pipe(
    //     tap( this.saveUserToLocalStorage )
    //   )
    // ;
    const usuarioObtenidoDelRest = {
      id: 2,
      username: "jmelnik",
      email: "jorge.melnik@ucu.edu.uy"
    }
    this.saveUserToLocalStorage(usuarioObtenidoDelRest);
    return of(usuarioObtenidoDelRest);
  }

  doLogout() {
    localStorage.clear();
    this.user = undefined;
  }
}

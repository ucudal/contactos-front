import { Injectable } from '@angular/core';
import { TokenResponse, User, UserAndToken } from './interfaces/user.interface';
import { Observable, catchError, delay, firstValueFrom, map, of, switchMap, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormControl, ValidationErrors } from '@angular/forms';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly USER_KEY = "user";

  private baseUrl = "http://localhost:3000";
  private userAndToken?: UserAndToken = undefined;

  constructor(
    private http: HttpClient
  ) { }

  get currentUser(): User | undefined {
    // if (!this.user) return undefined;
    return structuredClone(this.userAndToken?.user);
  }

  private saveUserToLocalStorage(user: UserAndToken) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.userAndToken = user;
  }

  checkAuthentication(): Observable<boolean> {
    if (!localStorage.getItem(this.USER_KEY)) {
      this.userAndToken = undefined
      return of(false)
    }

    this.userAndToken = JSON.parse(localStorage.getItem(this.USER_KEY)!);

    return this.http.get<User>(`${this.baseUrl}/auth/user`, {
      headers: {
        'Authorization': `Bearer ${this.userAndToken?.token}`
      }
    }).pipe(
      tap(user => this.userAndToken!.user = user),
      map((user) => !!user)
    );
  }

  async doLogin(email: string, password: string): Promise<void> {
    try {
      const res1 = await firstValueFrom(this.http.post<TokenResponse>(`${this.baseUrl}/auth/login`, { email, password }));
      const opciones = {
        headers: {
          'Authorization': `Bearer ${res1.token}`
        }
      };
      const user = await firstValueFrom(this.http.get<User>(`${this.baseUrl}/auth/user`, opciones));
      this.saveUserToLocalStorage({ user: user, token: res1.token });
    } catch (error: any) {
      if (error.status === 0) {        // A client-side or network error occurred. Handle it accordingly.
        throw new Error("No se pudo contactar el servidor.");
      } else {
        throw new Error(error.error.message);
      }
    }
  }

  doLoginGoogle(token: string): Observable<boolean> {
    return this.http.post<TokenResponse>(`${this.baseUrl}/auth/login/google`, { token })
      .pipe(
        tap(tokenResponse => console.log("token", tokenResponse.token)),
        switchMap((tokenResponse: any) => {
          const token = tokenResponse.token;
          return this.http.get<User>(`${this.baseUrl}/auth/user`, {
            headers: {
              'Authorization': `Bearer ${token} `
            }
          }).pipe(
            tap(user => this.saveUserToLocalStorage({ user, token })),
            tap((user) => console.log("Se guardó usuario en local storage: ", JSON.stringify(user))),
            catchError((error: any) => {
              return throwError(() => error.error.message);
            })
          );
        }),
        switchMap(user => of(true)),
        catchError((error: any) => {
          if (error.status === 401) {
            return throwError(() => "El email o contraseña no es correcto.");
          }
          return throwError(() => error.message);
        })
      );
  }

  doLogout() {
    localStorage.clear();
    if (this.userAndToken?.user.google) {
      GoogleAuth.signOut().then(() => console.log("Cerramos google."));
    }
    this.userAndToken = undefined;
  }

  public async emailTaken(valor: string): Promise<boolean> {
    return valor === "jorge@jorge.com";
  }



}

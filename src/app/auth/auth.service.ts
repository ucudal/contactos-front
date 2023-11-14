import { Injectable } from '@angular/core';
import { TokenResponse, User, UserAndToken } from './interfaces/user.interface';
import { Observable, catchError, delay, map, of, switchMap, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormControl, ValidationErrors } from '@angular/forms';

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

  doLogin(email: string, password: string): Observable<boolean | null> {
    //TODO: Cambiar por post al backend.
    return this.http.post<TokenResponse>(`${this.baseUrl}/auth/login`, { email, password })
      .pipe(
        tap(tokenResponse => console.log("token", tokenResponse.token)),
        switchMap((tokenResponse: any) => {
          const token = tokenResponse.token;
          return this.http.get<User>(`${this.baseUrl}/auth/user`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }).pipe(
            tap(user => this.saveUserToLocalStorage({ user, token })),
          );
        }),
        switchMap(user => of(true)),
        catchError((error: any) => {
          if (error.status === 401) {
            throw new Error("El email o contraseña no es correcto.");
          }
          return throwError(() => error.message);
        })
      );
  }

  doLogout() {
    localStorage.clear();
    this.userAndToken = undefined;
  }

  public emailTaken(valor: string): Observable<boolean> {
    return of(valor === "jorge@jorge.com");
  }
}

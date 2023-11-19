import { Injectable, inject } from '@angular/core';
import { TokenResponse, User, UserAndToken } from './interfaces/user.interface';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@angular/cdk/platform';

import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import config from "../../../capacitor.config"

declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly USER_KEY = "user";
  private platform = inject(Platform);

  private baseUrl = "http://localhost:3000";
  private userAndToken?: UserAndToken = undefined;
  private http = inject(HttpClient);

  constructor() {
    // if (this.platform.ANDROID) {
    //   this.baseUrl = "http://192.168.1.53:3000";
    // }
    console.log("constructor baseUrl: ", this.baseUrl);
  }

  get currentUser(): User | undefined {
    // if (!this.user) return undefined;
    return structuredClone(this.userAndToken?.user);
  }

  private async saveUserToLocalStorage(user: UserAndToken) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.userAndToken = user;
  }

  private getHeaders(token: string) {
    return { 'Authorization': `Bearer ${token}` };
  }

  public getAuthHeaders() {
    if (!this.userAndToken?.token) {
      throw new Error("No estás autorizado porque no hay token.");
    }
    return { 'Authorization': `Bearer ${this.userAndToken?.token}` };
  }

  public async checkAuthentication(): Promise<boolean> {
    if (!localStorage.getItem(this.USER_KEY)) {
      this.clearData();
      return false;
    }
    try {
      this.userAndToken = JSON.parse(localStorage.getItem(this.USER_KEY)!);
      const usuario = await firstValueFrom(this.http.get<User>(`${this.baseUrl}/auth/user`, { headers: this.getHeaders(this.userAndToken!.token) }));
      this.userAndToken!.user = usuario;
      return true;
    } catch (error: any) {
      this.doLogout();
      return false;
    }
  }

  async doLogin(email: string, password: string): Promise<void> {
    console.log("doLogin baseUrl: ", this.baseUrl);
    try {
      const res1 = await firstValueFrom(this.http.post<TokenResponse>(`${this.baseUrl}/auth/login`, { email, password }));
      const user = await firstValueFrom(this.http.get<User>(`${this.baseUrl}/auth/user`, { headers: this.getHeaders(res1.token) }));
      this.saveUserToLocalStorage({ user: user, token: res1.token });
    } catch (error: any) {
      if (error.status === 0) {        // Error del lado del cliente.
        throw new Error("No se pudo contactar el servidor.");
      } else {  //HttpErrorResponse
        throw new Error(error.error.message);
      }
    }
  }

  async doLoginGoogle(token: string): Promise<void> {
    console.log("DoLoginGoogle baseUrl: ", token);
    try {
      const resBackend = await firstValueFrom(this.http.post<TokenResponse>(`${this.baseUrl}/auth/login/google`, { token }));
      console.log({ resBackend });
      const usuario = await firstValueFrom(this.http.get<User>(`${this.baseUrl}/auth/user`, {
        headers: this.getHeaders(resBackend.token)
      }));
      this.saveUserToLocalStorage({ user: usuario, token: resBackend.token });
    } catch (error: any) {
      if (error.status === 0) {        //Error del lado del cliente.
        throw new Error("No se pudo contactar el servidor.");
      } else {  //HttpErrorResponse
        throw new Error(error.error.message);
      }
    }
  }

  async doLogout() {
    if (this.userAndToken?.user.google) {
      GoogleAuth.signOut().then(() => console.log("Cerramos google."));
    }
    this.clearData();
  }

  private async clearData() {
    localStorage.clear();
    this.userAndToken = undefined;
  }

  public async emailTaken(valor: string): Promise<boolean> {
    return valor === "jorge@jorge.com";
  }

  googleInit() {
    if (this.platform.ANDROID) {
      console.log("PLATAFORMA ES ANDROID.");
      return;
    }
    console.log("NO ES ANDROID.");
    const res = GoogleAuth.initialize(
      {
        clientId: config.plugins?.GoogleAuth.clientId,
        scopes: config.plugins?.GoogleAuth.scopes,
        grantOfflineAccess: true,
      }
    )
  }
}

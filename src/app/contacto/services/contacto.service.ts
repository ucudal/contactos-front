import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, firstValueFrom, from, of } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Contacto } from 'src/app/contacto/interfaces/contacto';
import { Platform } from '@angular/cdk/platform';

@Injectable(
  { providedIn: 'root' }    //singleton disponible en toda la aplicación.
)
export class ContactoService {

  private baseUrl = "http://localhost:3000/contacts";

  private http = inject(HttpClient);
  private authService = inject(AuthService);
  private platform = inject(Platform);

  getContactos(): Promise<Contacto[]> {
    if (this.platform.ANDROID) {
      this.baseUrl = "http://10.4.201.240:3000";
    }
    try {
      return firstValueFrom(this.http.get<Contacto[]>(this.baseUrl, { headers: this.authService.getAuthHeaders() }));
    } catch (error: any) {
      if (error.status === 0) {        // Error del lado del cliente.
        throw new Error("No se pudo contactar el servidor.");
      } else {  //HttpErrorResponse
        throw new Error(error.error.message);
      }
    }
  }

  getContactoById(id: number): Promise<Contacto | undefined> {
    try {
      return firstValueFrom(this.http.get<Contacto | undefined>(`${this.baseUrl}/${id}`));
    } catch (error: any) {
      if (error.status === 0) {        // Error del lado del cliente.
        throw new Error("No se pudo contactar el servidor.");
      } else {  //HttpErrorResponse
        throw new Error(error.error.message);
      }
    }
  }

  async addContact(contacto: Contacto) {
    const res = await fetch(this.baseUrl, {
      method: "POST",
      body: JSON.stringify(contacto),
      headers: { "Content-type": "application/json; charset=UTF-8" }

    });
    const data = await res.json();
    if (res.status !== 201) {
      console.error(data);
      throw new Error(data);
    }

    return data;
  }

  removeContact(id: number): void {
    console.log("Borremos id: ", id);

  }



}

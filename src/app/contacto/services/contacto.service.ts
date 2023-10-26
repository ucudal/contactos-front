import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Contacto } from 'src/app/contacto/interfaces/contacto';

@Injectable(
  { providedIn: 'root' }    //singleton disponible en toda la aplicación.
)
export class ContactoService {

  private baseUrl = "http://localhost:3000/contacts";

  constructor() {
    
  }

  async getContactosAsync() {
    const res = await fetch(this.baseUrl);
    const contactos = await res.json();
    return contactos;
  }

  async addContact(contacto: Contacto) {
    const res = await fetch(this.baseUrl, {
      method: "POST",
      body: JSON.stringify(contacto),
      headers: {"Content-type": "application/json; charset=UTF-8"}

    });
    const data = await res.json();
    if (res.status !== 201 ) {
      console.error(data);
      throw new Error(data);
    }

    return data;
  }

  removeContac(indice: number): void {
    console.log(indice);
    
  }

}

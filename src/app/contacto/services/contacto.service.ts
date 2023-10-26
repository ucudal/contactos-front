import { Injectable } from '@angular/core';
import { Contacto } from 'src/app/contacto/interfaces/contacto';

@Injectable(
  { providedIn: 'root' }    //singleton disponible en toda la aplicación.
)
export class ContactoService {
  constructor() {
    fetch("http://localhost:3000/contacts").then(res => res.json()).then(data => this.contactos = data);
  }

  private contactos: Contacto[] = [

  ]
  get contacts() {
    return this.contactos;
  }
  recibirContacto(contacto: Contacto): void {
    console.log("Recibí:", contacto);
    this.contactos.push(contacto);
  }

  recibirIndiceBorrado(indice: number): void {
    console.log(indice);
    this.contactos.splice(indice, 1);
  }

}

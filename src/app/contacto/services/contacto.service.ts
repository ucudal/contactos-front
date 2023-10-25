import { Injectable } from '@angular/core';
import { Contacto } from 'src/interfaces/contacto';

@Injectable(
    {providedIn: 'root'}    //singleton disponible en toda la aplicación.
)
export class ContactoService {
    constructor() { }

    public contactos: Contacto[] = [

      ]
    
      recibirContacto(contacto:Contacto):void {
        console.log("Recibí:", contacto);
        this.contactos.push(contacto);
      }
    
      recibirIndiceBorrado(indice:number):void {
        console.log(indice);
        this.contactos.splice(indice,1);
      }
    
}
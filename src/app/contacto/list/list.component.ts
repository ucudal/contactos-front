import { Component } from '@angular/core';
import { Contacto } from 'src/interfaces/contacto';

@Component({
  selector: 'app-contacto-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  contactos: Contacto[] = [
    {
      nombre: "jorge",
      edad: 38,
      sobrenombre: "profesor"
    },
    {
      nombre: "alberto",
      sobrenombre:  "albert",
      edad: 16
    }
  ]
  getContactDescription(contacto: Contacto):string{
    return `El ${contacto.sobrenombre} ${contacto.nombre}`;
  }
}

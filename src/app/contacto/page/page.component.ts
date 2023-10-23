import { Component } from '@angular/core';
import { Contacto } from 'src/interfaces/contacto';

@Component({
  selector: 'contacto-page',
  templateUrl: './page.component.html',
})
export class PageComponent {
  public contactos: Contacto[] = [
    new Contacto("Jorge", "Profe", 38),
    new Contacto("Alberto", "Alb", 22),
    new Contacto("Juan", "Pancho", 11),
    new Contacto("Rene", "C13", 33),
    new Contacto("Luisa", "lu", 18),
    new Contacto("Franciso", "Fran", 43),
    new Contacto("Veronica", "Vero", 44),
    new Contacto("Silvia", "ita", 17),
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

import { Component, Input, OnInit } from '@angular/core';
import { Contacto } from 'src/interfaces/contacto';

@Component({
  selector: 'app-contacto-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  
  @Input()
  public contactos!:Contacto[];

  ngOnInit(): void {
    if (!this.contactos) {
      throw new Error("La lista de contactos es obligatoria.");
    }
  }
}

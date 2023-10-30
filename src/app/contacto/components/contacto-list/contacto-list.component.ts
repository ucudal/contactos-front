import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contacto } from 'src/app/contacto/interfaces/contacto';

@Component({
  selector: 'contacto-list',
  templateUrl: './contacto-list.component.html',
})
export class ContactoListComponent implements OnInit {

  @Input()
  public contactos!: Contacto[];

  @Output()
  public onDeleteContacto: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    if (!this.contactos) {
      throw new Error("La lista de contactos es obligatoria.");
    }
  }

  emitDeletedId(id: number) {
    this.onDeleteContacto.emit(id);
  }
}

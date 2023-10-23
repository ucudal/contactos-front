import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contacto } from 'src/interfaces/contacto';

@Component({
  selector: 'app-contacto-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  
  @Input()
  public contactos!:Contacto[];

  @Output()
  public onDeleteContacto: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    if (!this.contactos) {
      throw new Error("La lista de contactos es obligatoria.");
    }
  }

  emitDeletedId(id:number) {
    this.onDeleteContacto.emit(id);
  }
}

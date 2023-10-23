import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contacto } from 'src/interfaces/contacto';

@Component({
  selector: 'app-contacto-form',
  templateUrl: './contacto-form.component.html',
})
export class ContactoFormComponent {

  public contacto: Contacto = new Contacto("", "", 0);

  @Output()
  public onNewContacto: EventEmitter<Contacto> = new EventEmitter<Contacto>();

  emitContacto() {
    this.onNewContacto.emit(this.contacto);
    this.resetContacto();
  }

  resetContacto() {
    this.contacto = new Contacto("", "", 0);
  }

}

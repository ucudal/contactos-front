import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contacto } from 'src/interfaces/contacto';

@Component({
  selector: 'app-contacto-form',
  templateUrl: './contacto-form.component.html',
})
export class ContactoFormComponent implements OnInit {

  public contacto: Contacto;

  @Output()
  public onNewContacto: EventEmitter<Contacto> = new EventEmitter<Contacto>();

  constructor(){
    this.contacto ={
      id: 0,
      foto: '',
      nombre: '',
      sobrenombre: '',
      edad: 0,
      email: '',
      telefono: ''
    };
  }

  ngOnInit(): void {
    
  }

  emitContacto() {
    this.onNewContacto.emit(this.contacto);
    this.resetContacto();
  }

  resetContacto() {
    this.contacto ={
      id: 0,
      foto: '',
      nombre: '',
      sobrenombre: '',
      edad: 0,
      email: '',
      telefono: ''
    };
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Contacto } from 'src/app/contacto/interfaces/contacto';

@Component({
  selector: 'contacto-view',
  templateUrl: './contacto-view.component.html'
})
export class ContactoViewComponent implements OnInit {

  @Input()
  public contacto!: Contacto;

  @Input()
  public fondo: string = '';

  ngOnInit(): void {
    if (!this.contacto) throw new Error('El contacto es obligatorio.');
  }


  get description() {
    return this.contacto.sobrenombre + ":" + this.contacto.nombre;
  }
}
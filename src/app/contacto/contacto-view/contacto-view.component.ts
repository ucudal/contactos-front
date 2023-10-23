import { Component, Input, OnInit } from '@angular/core';
import { Contacto } from 'src/interfaces/contacto';

@Component({
  selector: 'contacto-view',
  templateUrl: './contacto-view.component.html'
})
export class ContactoViewComponent implements OnInit {

  @Input()
  public contacto!: Contacto;

  @Input()
  public fondo:string = '';

  @Input()
  public indice!:number;

  ngOnInit(): void {
    if (!this.contacto) throw new Error('El contacto es obligatorio.');
    if (!(this.indice >= 0)) throw new Error('El indice es obligatorio.');
  }

  
  get description() {
    return Contacto.getContactDescription(this.contacto);
  }
}

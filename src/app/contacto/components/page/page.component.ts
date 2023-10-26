import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';
import { Contacto } from '../../interfaces/contacto';


@Component({
  selector: 'contacto-page',
  templateUrl: './page.component.html',
})
export class PageComponent implements OnInit {
  public contactos:Contacto[] = [];

  constructor(public contactoService: ContactoService) {
    console.log("Constructor PageComponent");
  }

  ngOnInit(): void {
    this.refreshContactos();
  }

  refreshContactos () : void { 
    this.contactoService.getContactos().subscribe(contactos => {
      this.contactos = contactos
    });
  }

  recibirContacto(contacto:Contacto){
    this.contactoService.addContact(contacto)
    .then(contactoCreado => {
      console.log("Contacto creado: ", contactoCreado);
      this.refreshContactos();
    })
    .catch(e => console.error("ERROR al crear contacto: ", e.message));
  }

  recibirIdParaBorrar(id:number) {

  }

}

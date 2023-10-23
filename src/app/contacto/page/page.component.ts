import { Component } from '@angular/core';
import { Contacto } from 'src/interfaces/contacto';
import { ContactoService } from '../services/contacto.service';

@Component({
  selector: 'contacto-page',
  templateUrl: './page.component.html',
})
export class PageComponent {

  constructor (public contactoService : ContactoService) {
      
  }
  

}

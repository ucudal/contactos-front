import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../interfaces/contacto';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-contact-list-page',
  templateUrl: './contact-list-page.component.html',
  styleUrls: ['./contact-list-page.component.css']
})
export class ContactListPageComponent implements OnInit {

  contacts: Contacto[] = []

  constructor(private contactoService: ContactoService) {

  }

  ngOnInit(): void {
    this.contactoService.getContactos().subscribe();
  }

  receiveDeletedId(id:number) {
    console.log("El id:",id , " llegó a contact-list-page");
    this.contactoService.removeContact(id);
  }

}

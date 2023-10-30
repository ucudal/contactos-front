import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Contacto } from '../../interfaces/contacto';

@Component({
  selector: 'app-contact-view-page',
  templateUrl: './contact-view-page.component.html',
  styleUrls: ['./contact-view-page.component.css']
})
export class ContactViewPageComponent implements OnInit {

  public contacto?: Contacto;

  constructor(
    private contactoService: ContactoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.contactoService.getContactoById(id)),
      )
      .subscribe(contacto => {
        if (!contacto) return this.router.navigate(['/list'])
        this.contacto = contacto;
        return;
      }
      );
  }


}

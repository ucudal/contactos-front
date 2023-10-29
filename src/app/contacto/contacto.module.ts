import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountriesRoutingModule } from './contactos-routing.module';
import { ContactoViewComponent } from './components/contacto-view/contacto-view.component';
import { ContactFormPageComponent } from './pages/contact-form-page/contact-form-page.component';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';
import { ContactViewPageComponent } from './pages/contact-view-page/contact-view-page.component';
import { ContactoFormComponent } from './components/contacto-form/contacto-form.component';
import { ContactoListComponent } from './components/contacto-list/contacto-list.component';


@NgModule({
  declarations: [
    ContactFormPageComponent,
    ContactListPageComponent,
    ContactViewPageComponent,
    ContactoFormComponent,
    ContactoViewComponent,
    ContactoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CountriesRoutingModule,
    SharedModule
  ],
})
export class ContactoModule {

}

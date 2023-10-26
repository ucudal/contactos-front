import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountriesRoutingModule } from './contactos-routing.module';
import { ListComponent } from './components/list/list.component';
import { ContactoFormComponent } from './components/contacto-form/contacto-form.component';
import { ContactoViewComponent } from './components/contacto-view/contacto-view.component';
import { PageComponent } from './components/page/page.component';

@NgModule({
  declarations: [
    ListComponent,
    ContactoFormComponent,
    ContactoViewComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CountriesRoutingModule,
  ],
})
export class ContactoModule {

}

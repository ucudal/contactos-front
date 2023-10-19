import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ContactoFormComponent } from './contacto-form/contacto-form.component';
import { ContactoViewComponent } from './contacto-view/contacto-view.component';

@NgModule({
  declarations: [
    ListComponent,
    ContactoFormComponent,
    ContactoViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    ContactoFormComponent,
    ContactoViewComponent
  ]
})
export class ContactoModule { 

}

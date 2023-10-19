import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ContactoFormComponent } from './contacto-form/contacto-form.component';
import { ContactoViewComponent } from './contacto-view/contacto-view.component';
import { FormsModule } from '@angular/forms';
import { PageComponent } from './page/page.component';

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
    
  ],
  exports: [
    PageComponent
  ]
})
export class ContactoModule { 

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';
import { ListComponent } from './contacto/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ContactoComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

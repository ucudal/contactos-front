import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './main/pages/home-page/home-page.component';
import { AcercaDeComponent } from './main/pages/acerca-de/acerca-de.component';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule),
  },
  {
    path: "contacts",
    loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule),

  },
  {
    path: "",
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)  //forRoot para las rutas /algo
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

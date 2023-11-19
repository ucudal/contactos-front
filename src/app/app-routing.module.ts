import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userIsLogged, userIsNotLogged } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule),
    canMatch: [userIsNotLogged]
  },
  {
    path: "contacts",
    loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule),
    canMatch: [userIsLogged,]
  },
  {
    path: "",
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
  },
  {
    path: "**",
    redirectTo: "",
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
export class AppRoutingModule {
  constructor() {
    console.log("AppRoutingModule");
  }
}

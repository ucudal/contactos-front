import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AcercaDeComponent } from './shared/pages/acerca-de/acerca-de.component';

const routes: Routes = [
  {
    path: "home",
    component: HomePageComponent,

  },
  {
    path: "about",
    component: AcercaDeComponent,

  },
  // {
  //   path: "countries",
  //   loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule),

  // },
  {
    path: "**",
    redirectTo: "home"
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

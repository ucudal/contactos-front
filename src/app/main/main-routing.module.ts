import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from 'src/app/main/pages/acerca-de/acerca-de.component';
import { HomePageComponent } from 'src/app/main/pages/home-page/home-page.component';
import { MainLayoutPageComponent } from 'src/app/shared/pages/main-layout-page/main-layout-page.component';

const routes: Routes = [
  {
    path: "",
    component: MainLayoutPageComponent,
    children: [
      {
        path: "home",
        component: HomePageComponent,
      },
      {
        path: "about",
        component: AcercaDeComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {


}

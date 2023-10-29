import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../main/pages/home-page/home-page.component';
import { AcercaDeComponent } from '../main/pages/acerca-de/acerca-de.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainLayoutPageComponent } from './pages/main-layout-page/main-layout-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AcercaDeComponent,
    SidebarComponent,
    NotFoundComponent,
    MainLayoutPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,

  ]
})
export class SharedModule { }

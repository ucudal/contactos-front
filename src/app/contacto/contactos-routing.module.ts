import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactFormPageComponent } from './pages/contact-form-page/contact-form-page.component';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';
import { ContactViewPageComponent } from './pages/contact-view-page/contact-view-page.component';
import { MainLayoutPageComponent } from '../shared/pages/main-layout-page/main-layout-page.component';

const routes = [
  {
    path: "",
    component: MainLayoutPageComponent
  },
  {
    path: "new",
    component: ContactFormPageComponent
  },
  {
    path: "edit/:id",
    component: ContactFormPageComponent
  },
  {
    path: "list",
    component: ContactListPageComponent
  },
  {
    path: ":id",
    component: ContactViewPageComponent
  },
  {
    path: "**",
    redirectTo: "list"
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {


}

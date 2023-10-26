import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageComponent } from './components/page/page.component';

const routes = [
  {
    path: "",
    component: PageComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class CountriesRoutingModule {


}

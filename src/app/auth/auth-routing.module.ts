import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutPageComponent } from '../shared/pages/main-layout-page/main-layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { userIsNotLogged } from './guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: MainLayoutPageComponent,
    children: [
      {
        path: "login",
        component: LoginPageComponent,
      },
      {
        path: "register",
        component: RegisterPageComponent
      },
      {
        path: "**",
        redirectTo: "login",
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

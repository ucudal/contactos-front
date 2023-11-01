import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  public email:string = "";
  public password:string="";

  constructor(
    private authService:AuthService, 
    private router: Router
    ){

  }

  onLogin():void {
    this.authService.doLogin(this.email,this.password)
      .subscribe( user => {
        this.router.navigate(["/"]);
      });
  }

}

import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Platform } from '@angular/cdk/platform';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hola titulo Angular';

  private authService = inject(AuthService);
  private platform = inject(Platform);

  constructor() {
    console.log("AppComponent");
  }

  ngOnInit(): void {
    this.authService.googleInit();
    this.authService.checkAuthentication();
  }


}

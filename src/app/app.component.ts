import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hola titulo Angular';

  private authService = inject(AuthService);

  constructor() {
    console.log("AppComponent");
  }
  ngOnInit(): void {
    this.authService.checkAuthentication();
  }



}

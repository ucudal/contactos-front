import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/interfaces/user.interface';

@Component({
  selector: 'app-main-layout-page',
  templateUrl: './main-layout-page.component.html',
  styleUrls: ['./main-layout-page.component.css']
})
export class MainLayoutPageComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  get user(): User | undefined {
    return this.authService.currentUser;
  }
  logout() {
    console.log("Presioné logout");
    this.authService.doLogout()
    this.router.navigate(["/auth/login"]);
  }
}

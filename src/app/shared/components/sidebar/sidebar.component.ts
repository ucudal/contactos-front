import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthLayoutComponent } from '../../../auth/pages/auth-layout/auth-layout.component';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/interfaces/user.interface';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Output()
  onLogout: EventEmitter<void> = new EventEmitter();

  constructor(private authService: AuthService) {

  }

  get currentUser(): User | undefined {
    console.log(this.authService.currentUser);
    return this.authService.currentUser;
  }

  emitLogout() {
    console.log("Logout emitido.");
    this.onLogout.emit();
  }
}

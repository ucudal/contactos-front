import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
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
    console.log("SidebarComponent");
  }

  get currentUser(): User | undefined {
    return this.authService.currentUser;
  }

  emitLogout() {
    this.onLogout.emit();
  }
}

import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MyAsyncValidatorsService {

  constructor(private authService: AuthService) {

  }

  public emailTaken = (control: FormControl): Observable<ValidationErrors | null> => {

    const value: string = control.value.trim().toLowerCase();

    if (this.authService.emailTaken(value)) {
      return of({
        emailTaken: true
      })
    }
    return of(null);
  }
}

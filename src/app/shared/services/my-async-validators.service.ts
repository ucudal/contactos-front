import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { Observable, delay, of, switchMap } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MyAsyncValidatorsService {

  constructor(private authService: AuthService) {

  }

  public emailTaken = (control: FormControl): Observable<ValidationErrors | null> => {

    const value: string = control.value.trim().toLowerCase();
    return this.authService.emailTaken(value).pipe(
      switchMap((valor) => {
        if (valor) {
          return of({
            emailTaken: true
          })
        }
        return of(null);
      })
    );
  }
}

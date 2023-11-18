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

  public emailTaken = async (control: FormControl): Promise<ValidationErrors | null> => {

    const value: string = control.value.trim().toLowerCase();
    const valido = await this.authService.emailTaken(value);
    if (valido) return {
      emailTaken: true
    }
    return null;
  }
}

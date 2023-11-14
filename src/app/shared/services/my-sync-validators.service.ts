import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MySyncValidators {

  constructor() {

  }

  static cantStartWithAdmin = (control: FormControl): ValidationErrors | null => {

    const value: string = control.value.trim().toLowerCase();

    if (value.toLowerCase().startsWith("admin")) {
      return {
        cantStartWithAdmin: true,
      }
    }

    return null;
  }


}

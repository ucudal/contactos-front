import { inject } from "@angular/core";
import { FormControl, ValidationErrors } from "@angular/forms";
import { Observable, delay, of } from "rxjs";


export class MySyncValidators {
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


import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, FormGroup, AbstractControl } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {

  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  public cantStartWithAdmin = (control: FormControl): ValidationErrors | null => {

    const value: string = control.value.trim().toLowerCase();

    if (value.toLowerCase().startsWith("admin")) {
      return {
        cantStartWithAdmin: true,
      }
    }

    return null;
  }

  public emailTaken = async (control: FormControl): Promise<ValidationErrors | null> => {
    const value: string = control.value.trim().toLowerCase();
    if (value === "jorge@jorge.com") {
      return {
        emailTaken: true,
      }
    }
    return null;
  }

  public isInValidField(form: FormGroup, field: string) {
    return form.controls[field].errors && form.controls[field].touched;
  }


  public isFieldOneEqualFieldTwo(field1: string, field2: string) {

    return (formGroup: FormControl): ValidationErrors | null => {

      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;

      if (fieldValue1 !== fieldValue2) {
        formGroup.get(field2)?.setErrors({ notEqual: true });
        return { notEqual: true }
      }

      formGroup.get(field2)?.setErrors(null);
      return null;
    }

  }


}

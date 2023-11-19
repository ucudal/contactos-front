import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { MySyncValidators } from 'src/app/shared/services/my-sync-validators.service';
import { MyAsyncValidatorsService } from 'src/app/shared/services/my-async-validators.service';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {

  private authService = inject(AuthService);
  private router = inject(Router);
  private formBuilder = inject(FormBuilder);
  private validatorService = inject(ValidatorsService);
  private asyncValidators = inject(MyAsyncValidatorsService);
  private platform = inject(Platform);

  public error = "";

  public myForm: FormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")], [this.asyncValidators.emailTaken]],
    password: ["", [Validators.required, MySyncValidators.cantStartWithAdmin, Validators.minLength(6)]]
  });

  async doLogin() {
    try {
      const user = await GoogleAuth.signIn();
      await this.authService.doLoginGoogle(user.authentication.idToken)
      this.router.navigate(["/"]);
    } catch (error: any) {
      this.error = error.message;
    }
  }

  async submitForm(): Promise<void> {
    this.myForm.markAllAsTouched();
    this.error = "";
    if (!this.myForm.valid) {
      return;
    }
    try {
      await this.authService.doLogin(this.myForm.value.email, this.myForm.value.password)
      this.router.navigate(["/"]);
    } catch (error: any) {
      this.error = error.message;
    }
  }

  public isInvalidField(field: string) {
    return this.validatorService.isInValidField(this.myForm, field);
  }

  public getFieldError(field: string) {
    return this.validatorService.getFieldError(this.myForm, field);
  }

}

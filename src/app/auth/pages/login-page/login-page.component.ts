import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, map, of } from 'rxjs';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { MySyncValidators } from 'src/app/shared/services/my-sync-validators.service';
import { MyAsyncValidatorsService } from 'src/app/shared/services/my-async-validators.service';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

declare const google: any;
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements AfterViewInit {

  public error = "";

  public myForm: FormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")], [this.asyncValidators.emailTaken]],
    password: ["", [Validators.required, MySyncValidators.cantStartWithAdmin, Validators.minLength(6)]]
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private validatorService: ValidatorsService,
    private asyncValidators: MyAsyncValidatorsService
  ) {

  }
  ngAfterViewInit(): void {
    this.googleInit();
  }

  googleInit() {

    GoogleAuth.initialize(
      {
        grantOfflineAccess: true,
      }
    )
  }

  async doLogin() {
    const user = await GoogleAuth.signIn();

    console.log(user);
    this.authService.doLoginGoogle(user.authentication.idToken)
      .pipe(
        catchError(error => {
          this.error = error.message;
          return of(false);
        }),
      )
      .subscribe(valor => {
        console.log({ valor });
        if (valor) {
          this.router.navigate(["/"]);
        }
      });
  }

  isInvalidField(field: string) {
    // return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
    return this.validatorService.isInValidField(this.myForm, field);
  }

  submitForm(): void {
    this.myForm.markAllAsTouched();
    if (this.myForm.valid) {
      this.error = "";
      this.authService.doLogin(this.myForm.value.email, this.myForm.value.password)
        .pipe(
          catchError(error => {
            console.log({ error })
            this.error = error;
            return of(false);
          }),
        )
        .subscribe(valor => {
          console.log("login:", { valor });
          if (valor) {
            this.router.navigate(["/"]);
          }
        });
      return;
    }
    this.error = "Los datos no son correctos."
    console.log("Formularion de login es invalido");
  }

}

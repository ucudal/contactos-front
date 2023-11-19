import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '../auth.service';


export const userIsLogged: CanMatchFn = async (route: Route, segments: UrlSegment[]) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  try {
    const autenticado = await authService.checkAuthentication();
    if (!autenticado) {
      router.navigate(["/auth/login"]);
      return false;
    };
    return true;
  } catch (error) {
    return false;
  }

}

export const userIsNotLogged: CanMatchFn = async (route: Route, segments: UrlSegment[]) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  try {
    const autenticado = await authService.checkAuthentication();
    if (autenticado) {
      router.navigate(["/"]);
      return false;
    };
    return true;
  } catch (error) {
    return false;
  }

}

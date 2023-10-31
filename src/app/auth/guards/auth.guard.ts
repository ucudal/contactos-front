import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '../auth.service';


export const userIsLogged: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  const router = inject(Router);
  return inject(AuthService).checkAuthentication()
    .pipe(
      tap(autenticado => {
        if (!autenticado) router.navigate(["/about"]);
      })
    );
}

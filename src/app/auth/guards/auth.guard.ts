import { Injectable, inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Route, UrlSegment } from '@angular/router';
import { AuthService } from '../auth.service';

export const userIsLogged: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  console.log("userIsLogged")
  return inject(AuthService).checkAuthentication();
}

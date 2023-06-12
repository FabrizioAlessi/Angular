import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  logOut,
  login,
  loginFailure,
  loginSuccess,
} from '../actions/loginActions';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/authServices/auth.service';
import { currentUserInterface } from 'src/app/auth/authTypes/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistenceService } from 'src/app/shared/services/persistence.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffect {
  auth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap(({ authRequest }) => {
        return this.loginService.login(authRequest).pipe(
          map((currentUser: currentUserInterface) => {
            this.PesrtistenceService.set(
              'accessToken',
              currentUser.user?.token
            );
            return loginSuccess({ currentUser });
          }),
          catchError((backendError: HttpErrorResponse) => {
            return of(loginFailure(backendError.error));
          })
        );
      })
    )
  );
  // redirectAfterSubmit$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(loginSuccess),
  //       tap(() => {
  //         this.router.navigateByUrl('/')
  //       })
  //     ),
  //   {dispatch: false}
  // )
  logOut$ = createEffect(
    () =>
    this.actions$.pipe(
      ofType(logOut),
      tap(() => {
        this.PesrtistenceService.set('accessToken', '')
        this.router.navigateByUrl('/')
      })
    ),
    {dispatch: false} //IMPORTANTE
  );

  constructor(
    private actions$: Actions,
    private loginService: AuthService,
    private PesrtistenceService: PersistenceService,
    private router: Router
  ) {}
}

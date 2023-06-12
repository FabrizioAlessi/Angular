import { PersistenceService } from './../../shared/services/persistence.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  register,
  registerFailure,
  registerSuccess,
} from '../actions/registerActions';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/authServices/auth.service';
import { currentUserInterface } from 'src/app/auth/authTypes/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class RegEffect {
  registration$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      exhaustMap(({ regRequest }) => {
        return this.authService.registration(regRequest).pipe(
          map((currentUser: currentUserInterface) => {
            this.PersistenceService.set('accessToken', currentUser.user?.token)
            return registerSuccess({ currentUser });
          }),
          catchError((backendError: HttpErrorResponse) => {
            console.log(backendError.error)
            return of(registerFailure(backendError.error));

          })
        );
      })
    )
  );

  // redirectAfterSubmit$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(registerSuccess),
  //       tap(() => {
  //         this.router.navigateByUrl('/')
  //       })
  //     ),
  //   {dispatch: false}
  // )

  constructor(private actions$: Actions, private authService: AuthService, private PersistenceService:PersistenceService, private router:Router) {}
}

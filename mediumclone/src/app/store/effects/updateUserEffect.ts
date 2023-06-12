import { Actions, createEffect, ofType } from '@ngrx/effects';
import { updateUser } from '../actions/updateUserAction';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { AuthService } from 'src/app/auth/authServices/auth.service';
import { currentUserInterface } from 'src/app/auth/authTypes/currentUser.interface';
import { updateUserSuccess } from '../actions/updateUserAction';
import { HttpErrorResponse } from '@angular/common/http';
import { updateUSerFailure } from '../actions/updateUserAction';
import { Injectable } from '@angular/core';
@Injectable()
export class updateEffect {
  auth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUser),
      exhaustMap(({ currentUserReq }) => {
        return this.updateService.updateCurrentUser(currentUserReq).pipe(
          map((currentUser: currentUserInterface) => {
            console.log(currentUser, "response")
            return updateUserSuccess({ currentUser });
          }),
          catchError((backendError: HttpErrorResponse) => {
            return of(updateUSerFailure({ backendError: backendError.error }));
          })
        );
      })
    )
  );
  constructor(private actions$: Actions, private updateService: AuthService) {}
}

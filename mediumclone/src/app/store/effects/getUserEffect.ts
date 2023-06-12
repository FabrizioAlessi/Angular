import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { currentUserInterface } from "src/app/auth/authTypes/currentUser.interface";
import { PersistenceService } from "src/app/shared/services/persistence.service";
import { getUser, getUserFailure, getUserSuccess } from "../actions/getCurrentUserAction";
import { AuthService } from "src/app/auth/authServices/auth.service";
import { loginSuccess } from "../actions/loginActions";

@Injectable()
export class GetUserEffect {
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUser),
      exhaustMap(() => {
        return this.authService.getCurrentUser().pipe(
          map((currentUser: currentUserInterface) => {
            console.log(currentUser)
            return loginSuccess({ currentUser }); //NOTA: devo invocare sempre al stessa action al success dell'auth, altrimenti mi trovo variabili diverse pe ril currentUSer
          }),
          catchError(() => {
            return of(getUserFailure());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService, private PesrtistenceService:PersistenceService) {}
}

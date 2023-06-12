import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { getProfile, getProfileFailure, getProfileSuccess } from "./userProfileActions";
import { UserProfileService } from "../services/userProfile.service";
import { UserProfileInterface } from "../types/userProfile.interface";


@Injectable()
export class UserProfileEffect {
  profile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProfile),
      exhaustMap(({slug}) => {
        return this.profileService.getUserProfile(slug).pipe(
          map((profile: UserProfileInterface) => {
            return getProfileSuccess({ profile });
          }),
          catchError(() => {
            return of(getProfileFailure());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private profileService: UserProfileService) {}
}

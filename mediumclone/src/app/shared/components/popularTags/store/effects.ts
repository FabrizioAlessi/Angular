import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import {
  getPopularTags,
  getPopularTagsFailure,
  getPopularTagsSuccess,
} from './actions/actions';
import { PopularTagsService } from '../services/popularTags.services';

@Injectable()
export class popularTagsEffect {
  tags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTags),
      exhaustMap(() => {
        return this.tagsService.getPopularTags().pipe(
          map((popularTags) => {
            return getPopularTagsSuccess({popularTags});
          }),
          catchError(() => {
            return of(getPopularTagsFailure());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private tagsService: PopularTagsService
  ) {}
}

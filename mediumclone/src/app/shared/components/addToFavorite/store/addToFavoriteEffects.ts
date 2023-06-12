import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { AddToFavoriteService } from '../services/addToFavorite.service';
import { addToFavorites, addToFavoritesFailure, addToFavoritesSuccess } from './addToFavoritesAction';

@Injectable()
export class addToFavoritesEffect {
  addTofavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavorites),
      exhaustMap(({isFavorited,slug}) => {
        const article$ = isFavorited ? this.addToFavorite.removeFromFavorites(slug) : this.addToFavorite.addToFavorites(slug)
        return article$.pipe(
          map((article) => {
            return addToFavoritesSuccess({article});
          }),
          catchError(() => {
            return of(addToFavoritesFailure());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private addToFavorite: AddToFavoriteService
  ) {}
}

import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  createArticle,
  createArticleFailure,
  createArticleSuccess,
} from './createArticleAction';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { CreateArticleService } from '../service/createArticle.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()

export class CreateArticleEffect {
  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticle),
      exhaustMap(({ request }) => {
        return this.createArticlesService.createArticle(request).pipe(
          map((article) => {
            return createArticleSuccess({ article });
          }),
          catchError((errors: HttpErrorResponse) => {
            return of(createArticleFailure({ errors: errors.error.errors }));
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private createArticlesService: CreateArticleService
  ) {}
}


import { ArticlesService } from './../services/articles.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import {
  deleteArticle,
  deleteArticleFailure,
  deleteArticleSuccess,
  getArticle,
  getArticleFailure,
  getArticleSuccess,
} from './articleActions';
import { ArticlesInterface } from 'src/app/shared/types/articles.interface';
import { ArticleService } from 'src/app/shared/services/article.service';
import { Router } from '@angular/router';

@Injectable()
export class ArticleEffect {
  article$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticle),
      exhaustMap(({ slug }) => {
        return this.articleService.getArticle(slug).pipe(
          map((article: ArticlesInterface) => {
            return getArticleSuccess({ article });
          }),
          catchError(() => {
            return of(getArticleFailure());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) {}
}
//NOTA per deleteEffect e redirect, non abbiamo bisogno di reducer, in quanto non andiamo a cambiare lo stato dell'applicazione
@Injectable()
export class DeleteArticleEffect {
  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticle),
      exhaustMap(({ slug }) => {
        return this.articlesService.deleteArticle(slug).pipe(
          map(() => {
            return deleteArticleSuccess();
          }),
          catchError(() => {
            return of(deleteArticleFailure());
          })
        );
      })
    )
  );
  redirect$ = createEffect(() =>
  this.actions$.pipe(
    ofType(deleteArticleSuccess),
    tap(() => {
      return this.router.navigateByUrl('/');
    })
  ),
  {dispatch:false}
);

  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService,
    private router: Router
  ) {}
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getArticle,
  getArticleFailure,
  getArticleSuccess,
  updateArticle,
  updateArticleFailure,
  updateArticleSuccess,
} from './editArticleActions';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { ArticleService } from 'src/app/shared/services/article.service';
import { ArticlesInterface } from 'src/app/shared/types/articles.interface';
import { EditArticleService } from '../service/editArticle.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()


export class ArticleEffect {
  article$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticle),
      exhaustMap(({ slug }) => {
        return this.articleService.getArticle(slug).pipe(
          map((article: ArticlesInterface) => {
            console.log(article, "article nell'effect")
            return getArticleSuccess({ article });
          }),
          catchError((err) => {
            return of(getArticleFailure(err));
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
//RICORDA, devi decorare ogni effect con il decorator injectable
@Injectable()
export class UpdateArticleEffect {
  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticle),
      exhaustMap(({ slug, request }) => {
        return this.editArticleService.updateArticle(slug, request).pipe(
          map((article) => {
            return updateArticleSuccess({ article });
          }),
          catchError((errors: HttpErrorResponse) => {
            return of(updateArticleFailure({ errors: errors.error.errors }));
          })
        );
      })
    )
  );

  redirect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleSuccess),
      tap((article) => {
        return this.router.navigate(['/articles', article.article.slug]);
      })
    ),
    {dispatch:false}
  );

  constructor(
    private actions$: Actions,
    private editArticleService: EditArticleService,
    private router: Router
  ) {}
}
// @Injectable()
// export class redirectAfterEdit {
//   redirect$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(updateArticleSuccess),
//       tap((article) => {
//         console.log(article, "article nel redirect")
//         return this.router.navigate(['/articles', article.article.slug]);
//       })
//     )
//   );

//   constructor(private actions$: Actions, private router: Router) {}
// }

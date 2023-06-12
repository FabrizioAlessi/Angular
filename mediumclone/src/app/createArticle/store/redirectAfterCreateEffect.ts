import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createArticleSuccess } from "./createArticleAction";
import { tap } from "rxjs";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()

export class redirectAfterCreate {
  redirect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleSuccess),
      tap(({ article }) => {
        console.log(article, "article nel redirect")
        return this.router.navigate(['/articles', article.slug]);
      })
    )
  );

  constructor(private actions$: Actions, private router: Router) {}
}

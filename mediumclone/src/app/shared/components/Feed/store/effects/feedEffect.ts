import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getFeed, getFeedSuccess } from "../actions/getFeedActions";
import { FeedService } from "../../services/feed.service";
import { FeedResponseInterface } from "../../Types/feedResponse.interface";
import { exhaustMap, map } from "rxjs";

@Injectable()
export class FeedEffect {
  auth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeed),
      exhaustMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed:FeedResponseInterface) => {
            return getFeedSuccess({ feed });
          }),

        );
      })
    )
  );

  constructor(private actions$:Actions, private feedService:FeedService){}
}

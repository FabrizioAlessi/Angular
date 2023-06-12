import { FeedStateInterface } from './../Types/feedState.interface';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const feedFeatureSelector = createFeatureSelector<FeedStateInterface>('feed')
//('feed') è un selector per lo storeModule.forfeature

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState:FeedStateInterface) => feedState.isLoading
)

export const dataFeedSelector = createSelector(
  feedFeatureSelector,
  (feedState:FeedStateInterface) => feedState.data
)

export const errorFeedSelector = createSelector(
  feedFeatureSelector,
  (feedState:FeedStateInterface) => feedState.error
)


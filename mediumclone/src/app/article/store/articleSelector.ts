import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ArticleStateInterface } from "../types/articleState.interface";

export const articleFeatureSelector = createFeatureSelector<ArticleStateInterface>('article')

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (articleState:ArticleStateInterface) => articleState.isLoading
)

export const dataArticleSelector = createSelector(
  articleFeatureSelector,
  (articleState:ArticleStateInterface) => articleState.article
)

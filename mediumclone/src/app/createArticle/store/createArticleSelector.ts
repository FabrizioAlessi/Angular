import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CreateArticleStateInterface } from "../types/createArticleState.interface";

export const articleFeatureSelector = createFeatureSelector<CreateArticleStateInterface>('createArticle')

export const isSubmittingSelector = createSelector(
  articleFeatureSelector,
  (articleState:CreateArticleStateInterface) => articleState.isSubmitting
)

export const errorCreateArticleSelector = createSelector(
  articleFeatureSelector,
  (articleState:CreateArticleStateInterface) => articleState.validationErrors
)

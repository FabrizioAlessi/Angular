import { createFeatureSelector, createSelector } from "@ngrx/store"
import { EditArticleStateInterface } from "../types/editArticleState.interface"

export const articleFeatureSelector = createFeatureSelector<EditArticleStateInterface>('editArticle')

export const isSubmittingEditSelector = createSelector(
  articleFeatureSelector,
  (articleState:EditArticleStateInterface) => articleState.isSubmitting
)

export const errorEditArticleSelector = createSelector(
  articleFeatureSelector,
  (articleState:EditArticleStateInterface) => articleState.validationErrors
)
export const editArticleSelector = createSelector(
  articleFeatureSelector,
  (articleState:EditArticleStateInterface) => articleState.article
)

export const isLoadingEditSelector = createSelector(
  articleFeatureSelector,
  (articleState:EditArticleStateInterface) => articleState.isLoading
)

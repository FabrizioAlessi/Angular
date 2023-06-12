import { createAction, props } from "@ngrx/store"
import { ActionArticleTypes } from "./actionsType"
import { ArticlesInterface } from "src/app/shared/types/articles.interface"

export const getArticle = createAction(
  ActionArticleTypes.GETARTICLE,
  props<{slug:string}>()
)

export const getArticleSuccess= createAction(
  ActionArticleTypes.GETARTICLESUCCESS,
  props<{article: ArticlesInterface}>()
)

export const getArticleFailure = createAction(
  ActionArticleTypes.GETARTICLEFAILURE
)

export const deleteArticle = createAction(
  ActionArticleTypes.DELETEARTICLE,
  props<{slug:string}>()
)

export const deleteArticleSuccess= createAction(
  ActionArticleTypes.DELETEARTICLESUCCESS,
)

export const deleteArticleFailure = createAction(
  ActionArticleTypes.DELETEARTICLEFAILURE
)

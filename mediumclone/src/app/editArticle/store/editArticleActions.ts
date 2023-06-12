import { createAction, props } from "@ngrx/store"
import { ArticlesInterface } from "src/app/shared/types/articles.interface"
import { BackendErrorsInterface } from "src/app/shared/types/backendError.interface"
import { EditArticleActionType } from "./editArticleActionsTypes"
import { ArticleRequestInterface } from "src/app/shared/components/articleForm/types/articleRequest.interface"

export const getArticle = createAction(
  EditArticleActionType.GETARTICLE,
  props<{slug:string}>()
)

export const getArticleSuccess= createAction(
  EditArticleActionType.GETARTICLESUCCESS,
  props<{article: ArticlesInterface}>()
)

export const getArticleFailure = createAction(
  EditArticleActionType.GETARTICLEFAILURE,
  props<{errors: BackendErrorsInterface}>()
)

export const updateArticle = createAction(
  EditArticleActionType.EDITARTICLE,
  props<{slug:string, request:ArticleRequestInterface}>()
)

export const updateArticleSuccess= createAction(
  EditArticleActionType.EDITARTICLESUCCESS,
  props<{article: ArticlesInterface}>()
)

export const updateArticleFailure = createAction(
  EditArticleActionType.EDITARTICLEFAILURE,
  props<{errors: BackendErrorsInterface}>()
)

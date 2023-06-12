import { createAction, props } from "@ngrx/store"
import { ArticlesInterface } from "src/app/shared/types/articles.interface"
import { createArticleActionType } from "./createArticleActionTypes"
import { ArticleRequestInterface } from "src/app/shared/components/articleForm/types/articleRequest.interface"
import { BackendErrorsInterface } from "src/app/shared/types/backendError.interface"

export const createArticle = createAction(
  createArticleActionType.CREATEARTICLE,
  props<{request:ArticleRequestInterface}>()
)

export const createArticleSuccess= createAction(
  createArticleActionType.CREATEARTICLESUCCESS,
  props<{article: ArticlesInterface}>()
)

export const createArticleFailure = createAction(
  createArticleActionType.CREATEARTICLEFAILURE,
  props<{errors: BackendErrorsInterface}>()
)

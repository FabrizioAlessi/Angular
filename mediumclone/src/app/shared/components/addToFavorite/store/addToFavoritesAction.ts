import { createAction, props } from "@ngrx/store"
import { AddToFavoriteActionTypes } from "./addToFavoritesActionType"
import { ArticlesInterface } from "src/app/shared/types/articles.interface"


export const addToFavorites = createAction(
  AddToFavoriteActionTypes.ADDTOFAVORITES,
  props<{isFavorited:boolean, slug:string}>() //isFavorited lo useremo nell'effect per stabilire se sarà un addTo o removeTo
)

export const addToFavoritesSuccess= createAction(
  AddToFavoriteActionTypes.ADDTOFAVORITESSUCCESS,
  props<{article: ArticlesInterface}>()
)

export const addToFavoritesFailure = createAction(
  AddToFavoriteActionTypes.ADDTOFAVORITESFAILURE,
)

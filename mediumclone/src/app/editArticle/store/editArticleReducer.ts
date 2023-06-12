import { createReducer, on } from "@ngrx/store";
import { EditArticleStateInterface } from "../types/editArticleState.interface";
import { getArticle, getArticleFailure, getArticleSuccess, updateArticle, updateArticleFailure, updateArticleSuccess } from "./editArticleActions";
import { routerNavigationAction } from "@ngrx/router-store";

const initialState: EditArticleStateInterface = {
  article: null,
  isLoading: false,
  isSubmitting:false,
  validationErrors:null,
};

export const updateArticleReducer = createReducer(
  initialState,
  on(getArticle, (state) => ({
    ...state,
    isLoading:true,
  })),
  on(getArticleSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    article: action.article,
  })),
  on(getArticleFailure, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(updateArticle, (state) => ({
    ...state,
    isSubmitting: true,
  })),
  on(updateArticleSuccess, (state) => ({
    ...state,
    isSubmitting: false,
  })),
  on(updateArticleFailure, (state, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors
  })),
  on(routerNavigationAction, () => initialState)
);

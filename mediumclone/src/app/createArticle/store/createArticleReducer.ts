import { createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';
import { createArticle, createArticleFailure, createArticleSuccess } from './createArticleAction';
import { CreateArticleStateInterface } from '../types/createArticleState.interface';
const initialState: CreateArticleStateInterface = {
  isSubmitting:false,
  validationErrors: null
};

export const createArticleReducer = createReducer(
  initialState,
  on(createArticle, (state) => ({
    ...state,
    isSubmitting: true,
  })),
  on(createArticleSuccess, (state, action) => ({
    ...state,
    isSubmitting: false,
  })),
  on(createArticleFailure, (state, action) => ({
    ...state,
    isSubmitting: false,
  })),
  on(routerNavigationAction, () => initialState)
);

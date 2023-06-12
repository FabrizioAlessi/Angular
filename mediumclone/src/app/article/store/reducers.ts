import { createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';
import { ArticleStateInterface } from '../types/articleState.interface';
import { getArticle, getArticleFailure, getArticleSuccess } from './articleActions';
const initialState: ArticleStateInterface = {
  article: null,
  isLoading: false,
  error: null,
};

export const articleReducer = createReducer(
  initialState,
  on(getArticle, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getArticleSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    article: action.article
  })),
  //tutta la parte dell'error è da gestire, sia action che effect
  on(getArticleFailure, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  //action che viene da routerReducer, vedi docs Ngrx
  //al passaggio da un article all'altro, puliamo lo state dell'app
  on(routerNavigationAction, (): ArticleStateInterface => initialState)
);

import { createReducer, on } from '@ngrx/store';
import { FeedStateInterface } from './../../Types/feedState.interface';
import { getFeed, getFeedSuccess } from '../actions/getFeedActions';
import { getFeedFailure } from '../actions/getFeedActions';
import { routerNavigationAction } from '@ngrx/router-store';
const initialState: FeedStateInterface = {
  data: null,
  isLoading: false,
  error: null,
};

export const feedReducer = createReducer(
  initialState,
  on(getFeed, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getFeedSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    data: action.feed
  })),
  //tutta la parte dell'error è da gestire, sia action che effect
  on(getFeedFailure, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  //action che viene da routerReducer, vedi docs Ngrx
  on(routerNavigationAction, (): FeedStateInterface => initialState)
);

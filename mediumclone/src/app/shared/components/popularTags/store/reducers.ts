import { createReducer, on } from '@ngrx/store';
import { PopularTagsStateInterface } from './popularTagsState/popularTagsState.interface';
import {
  getPopularTags,
  getPopularTagsFailure,
  getPopularTagsSuccess,
} from './actions/actions';
const initialState: PopularTagsStateInterface = {
  data: null,
  isLoading: false,
  error: null,
};

export const tagsReducer = createReducer(
  initialState,
  on(getPopularTags, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getPopularTagsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    data: action.popularTags,
  })),
  //tutta la parte dell'error è da gestire, sia action che effect
  on(getPopularTagsFailure, (state) => ({
    ...state,
    isLoading: false,
  }))
);

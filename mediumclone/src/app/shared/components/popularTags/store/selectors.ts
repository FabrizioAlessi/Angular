import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PopularTagsStateInterface } from "./popularTagsState/popularTagsState.interface";


export const popularTagsFeatureSelector = createFeatureSelector<PopularTagsStateInterface>('tags')
export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (tagsState:PopularTagsStateInterface) => tagsState.data
)
export const popularTagsLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (tagsState:PopularTagsStateInterface) => tagsState.isLoading
)

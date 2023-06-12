import { createFeatureSelector, createSelector } from "@ngrx/store"
import { UserProfileStateInterface } from "../types/userProfileState.interface"

export const profileFeatureSelector = createFeatureSelector<UserProfileStateInterface>('profile')

export const onLoadingProfileSelector = createSelector(
  profileFeatureSelector,
  (profileState:UserProfileStateInterface) => profileState.isLoading
)

export const errorProfileSelector = createSelector(
  profileFeatureSelector,
  (profileState:UserProfileStateInterface) => profileState.errors
)
export const dataProfileSelector = createSelector(
  profileFeatureSelector,
  (profileState:UserProfileStateInterface) => profileState.data
)

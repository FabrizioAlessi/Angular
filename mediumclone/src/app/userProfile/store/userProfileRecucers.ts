import { createReducer, on } from "@ngrx/store";
import { UserProfileStateInterface } from "../types/userProfileState.interface";
import { getProfile, getProfileFailure, getProfileSuccess } from "./userProfileActions";
import { routerNavigationAction } from "@ngrx/router-store";

export const userProfileIntialState:UserProfileStateInterface = {
  data: null,
  isLoading: false,
  errors: null
};
export const profileReducer = createReducer(
  userProfileIntialState,
  on(getProfile, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getProfileSuccess, (state, action) => ({
    ...state,
    isLoggedin: false,
    data: action.profile
  })),
  on(getProfileFailure, (state) => ({
    ...state,
    isLoggedin: false,
  })),
  on(routerNavigationAction, () => userProfileIntialState)
)

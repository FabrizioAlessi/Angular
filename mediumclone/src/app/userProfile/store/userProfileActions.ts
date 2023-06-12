import { createAction, props } from "@ngrx/store";
import { UserProfileActionsInterface } from "./userProfileActions.interface";
import { UserProfileInterface } from "../types/userProfile.interface";

export const getProfile = createAction(
  UserProfileActionsInterface.GETPROFILE,
  props<{slug:string}>()
)

export const getProfileSuccess = createAction(
  UserProfileActionsInterface.GETPROFILESUCCESS,
  props<{profile:UserProfileInterface}>()
)

export const getProfileFailure = createAction(
  UserProfileActionsInterface.GETPROFILEFAILURE
)

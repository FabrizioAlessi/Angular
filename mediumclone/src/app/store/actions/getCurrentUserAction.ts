import { createAction, props } from "@ngrx/store";
import { GetCurrentUSerInterface } from "./actionTypes.ts/getCurrentAction.interface";
import { currentUserInterface } from "src/app/auth/authTypes/currentUser.interface";

export const getUser = createAction(
  GetCurrentUSerInterface.GETUSER
)

export const getUserSuccess = createAction(
  GetCurrentUSerInterface.GETUSERSUCCESS,
  props<{currentUser:currentUserInterface}>()
)

export const getUserFailure = createAction(
  GetCurrentUSerInterface.GETUSERFAILURE
)

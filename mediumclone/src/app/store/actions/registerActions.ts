import { createAction, props } from "@ngrx/store";
import { RegisterActionsInterface } from "./actionTypes.ts/registerActions.interface";
import { RegisterReqInterface } from "src/app/auth/authTypes/registerReq.interface";
import { currentUserInterface } from "src/app/auth/authTypes/currentUser.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendError.interface";

export const register = createAction(
  RegisterActionsInterface.REGISTER,
  props<{regRequest: RegisterReqInterface}>()
)

export const registerSuccess = createAction(
  RegisterActionsInterface.REGISTERSUCCESS,
  props<{currentUser: currentUserInterface}>() //prenderà currentUser dalla response del server
)

export const registerFailure = createAction(
  RegisterActionsInterface.REGISTERFAILURE,
  props<{backendError: BackendErrorsInterface}>() //prenderà backendError dalla httpresponse del server
)

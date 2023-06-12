import { createAction, props } from "@ngrx/store";
import { loginActionsInterface } from "./actionTypes.ts/loginActions.interface";
import { LoginReqInterface } from "src/app/auth/authTypes/loginReq.interface";
import { currentUserInterface } from "src/app/auth/authTypes/currentUser.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendError.interface";
import { updateUserActionsInterface } from "./actionTypes.ts/updateCurrentUserAction.interface";
import { CurrentUserReqInterface } from "src/app/shared/types/currentUserReq.interface";

export const updateUser = createAction(
  updateUserActionsInterface.UPDATEUSER,
  props<{currentUserReq:CurrentUserReqInterface}>()
)

export const updateUserSuccess = createAction(
  updateUserActionsInterface.UPDATEUSERSUCCESS,
  props<{currentUser:currentUserInterface}>()
)

export const updateUSerFailure = createAction(
  updateUserActionsInterface.UPDATEUSERFAILURE,
  props<{backendError:BackendErrorsInterface}>() //errors in risposta dal server
)

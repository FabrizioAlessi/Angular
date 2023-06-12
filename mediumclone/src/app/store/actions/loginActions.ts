import { createAction, emptyProps, props } from "@ngrx/store";
import { loginActionsInterface } from "./actionTypes.ts/loginActions.interface";
import { LoginReqInterface } from "src/app/auth/authTypes/loginReq.interface";
import { currentUserInterface } from "src/app/auth/authTypes/currentUser.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendError.interface";

export const login = createAction(
  loginActionsInterface.LOGIN,
  props<{authRequest:LoginReqInterface}>()
)

export const loginSuccess = createAction(
  loginActionsInterface.LOGINSUCCESS,
  props<{currentUser: currentUserInterface}>() //current user in risposta dal server
)

export const loginFailure = createAction(
  loginActionsInterface.LOGINFAILURE,
  props<{backendError:BackendErrorsInterface}>() //errors in risposta dal server
)

export const logOut = createAction(
  loginActionsInterface.LOGOUT,
)
//QUESTE action innescheranno degli effects (o side effects) che andranno a comunicare col server

import {
  register,
  registerFailure,
  registerSuccess,
} from 'src/app/store/actions/registerActions';
import { createReducer, on } from '@ngrx/store';
import { GlobalStateInterface } from './../../shared/types/globalState.interface';
import { logOut, login, loginFailure, loginSuccess } from '../actions/loginActions';
import { getUser, getUserSuccess } from '../actions/getCurrentUserAction';
import { getUserFailure } from '../actions/getCurrentUserAction';
import { updateUSerFailure, updateUserSuccess } from '../actions/updateUserAction';

export const initialState: GlobalStateInterface = {
  isLoading: false,
  isLoggedin: false,
  profile: null,
  backEndError: null,
  isSubmitting: null,
};
export const authReducer = createReducer(
  initialState,
  on(register, (state) => ({
    ...state,
    isLoggedin: false,
  })),
  //-------------------------REGISTER REDUCERS-----------------------------
  on(registerSuccess, (state, action) => ({
    ...state,
    isLoggedin: true,
    profile: action.currentUser,
  })),
  on(registerFailure, (state, action) => ({
    ...state,
    isLoggedin: false,
    backEndError: action.backendError,
  })),
  //--------------------------LOGIN REDUCERS--------------------------------
  on(login, (state) => ({
    ...state,
    isLoggedin: false,
  })),
  on(loginSuccess, (state, action) => ({
    ...state,
    isLoggedin: true,
    profile: action.currentUser,
  })),
  on(loginFailure, (state, action) => ({
    ...state,
    isLoggedin: false,
    backEndError: action.backendError,
  })),
  on(logOut, (state) => ({
    ...state,
    ...initialState,
    profile: null

  })),
  //------------------------CURRENT USER-------------------------------------
  on(getUser, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getUserSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    isLoggedin: true,
    currentUser: action.currentUser,
  })),
  on(getUserFailure, (state) => ({
    ...state,
    isLoading: false,
    isLoggedin: false,
    currentuser: null,
  })),
  //------------------------UPDATE USER--------------------------------
  on(updateUserSuccess, (state, action) => ({
    ...state,
    isLoggedin: true,
    profile: action.currentUser,
    isSubmitting: true
  })),
  on(updateUSerFailure, (state, action) => ({
    ...state,
    isLoggedin: false,
    backEndError: action.backendError,
  })),
);

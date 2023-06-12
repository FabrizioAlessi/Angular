import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GlobalStateInterface } from 'src/app/shared/types/globalState.interface';
//selector per lo stato globale dell'applicazione
export const authFeatureSelector = createFeatureSelector<GlobalStateInterface>('auth')

export const isLoggedinSelector = createSelector(
  authFeatureSelector,
  (state: GlobalStateInterface) => state.isLoggedin
);
export const isSubmittingUserSelector = createSelector(
  authFeatureSelector,
  (state:GlobalStateInterface) => state.isSubmitting
);
export const currentUserSelector = createSelector(
  authFeatureSelector,
  (state: GlobalStateInterface) => state.profile
);

export const backendErrorsSelector = createSelector(
  authFeatureSelector,
  (state: GlobalStateInterface) => state.backEndError
);
export const isAnonymousInSelector = createSelector(
  authFeatureSelector,
  (state: GlobalStateInterface) => state.isLoggedin == false
);

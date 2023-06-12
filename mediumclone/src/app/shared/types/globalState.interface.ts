import { currentUserInterface } from 'src/app/auth/authTypes/currentUser.interface';
import { BackendErrorsInterface } from './backendError.interface';
//è l'interface globale per lo stato dell'applicazione, da qui tutti i component prendono le info
export interface GlobalStateInterface {
  isLoading: boolean,
  isLoggedin: boolean;
  profile: currentUserInterface | null;
  backEndError: BackendErrorsInterface | null;
  isSubmitting: boolean | null
}

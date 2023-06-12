import { currentUserInterface } from 'src/app/auth/authTypes/currentUser.interface';
export interface CurrentUserReqInterface {
  user:currentUserInterface & {password:String}  //aggiungiamo la proprietà password all'object user
}

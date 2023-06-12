import { UserProfileInterface } from "./userProfile.interface";

export interface UserProfileStateInterface {
  data: UserProfileInterface | null;
  isLoading: boolean;
  errors: string | null
}

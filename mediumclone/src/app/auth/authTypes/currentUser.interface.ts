//è la struttura dell'user in risposta dal server
export interface currentUserInterface {
  user: null | {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: null;
  } //può essere null se non c'è corrispondenza tra user in front e user in backend
}

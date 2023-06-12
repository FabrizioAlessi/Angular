import { FeedResponseInterface } from "./feedResponse.interface";

export interface FeedStateInterface {
  isLoading: boolean,
  error: string | null,
  data: FeedResponseInterface | null //null lo avremo quando non abbiamo ancora chiesto nessun feed all'API
}

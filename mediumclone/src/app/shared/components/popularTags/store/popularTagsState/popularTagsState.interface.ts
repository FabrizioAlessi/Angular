import { PopularTagsResponseInterface } from "../../../Feed/Types/popularTagsResponse.interface";

export interface PopularTagsStateInterface {
  isLoading: boolean,
  error: string | null,
  // data: PopularTagsResponseInterface | null | Array<string>
  data:any

}

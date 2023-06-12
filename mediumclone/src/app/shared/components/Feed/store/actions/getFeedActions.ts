import { createAction, props } from "@ngrx/store"
import { ActionTypes } from "../actionTypes"
import { FeedResponseInterface } from "../../Types/feedResponse.interface"

export const getFeed = createAction(
  ActionTypes.GETFEED,
  props<{url:string}>()
)

export const getFeedSuccess= createAction(
  ActionTypes.GETFEEDSUCCESS,
  props<{feed: FeedResponseInterface}>()
)

export const getFeedFailure = createAction(
  ActionTypes.GETFEEDFAILURE
)

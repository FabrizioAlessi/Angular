import { createAction, props } from '@ngrx/store';
import { PopularTagsActionsInterface } from 'src/app/store/actions/actionTypes.ts/popularTagsActions.interface';
import { PopularTagsResponseInterface } from '../../../Feed/Types/popularTagsResponse.interface';

export const getPopularTags = createAction(PopularTagsActionsInterface.GETTAGS);

export const getPopularTagsSuccess = createAction(
  PopularTagsActionsInterface.GETTAGSSUCCESS,
  props<{ popularTags:Array<string> }>()
);

export const getPopularTagsFailure = createAction(
  PopularTagsActionsInterface.GETTAGSFAILURE
);

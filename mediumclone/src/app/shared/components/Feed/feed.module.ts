import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeedComponent } from './component/feed/feed.component';
import { FeedService } from './services/feed.service';
import { EffectsModule } from '@ngrx/effects';
import { FeedEffect } from './store/effects/feedEffect';
import { StoreModule } from '@ngrx/store';
import { feedReducer } from './store/reducers/feedReducers';
import { RouterModule } from '@angular/router';
import { ErrorMessageModule } from '../errorMessage/errorMessage.module';
import { PaginationModule } from '../pagination/pagination.module';
import { TagListComponent } from '../tagList/tagList.component';
import { AddToFavoriteModule } from '../addToFavorite/addToFavorite.module';
import { SpinnerComponent } from '../spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([FeedEffect]),
    StoreModule.forFeature('feed', feedReducer),//'feed' = selector, deve essere lo stesso in selector
    RouterModule,
    ErrorMessageModule,
    PaginationModule,
    TagListComponent,
    AddToFavoriteModule,
    SpinnerComponent
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}

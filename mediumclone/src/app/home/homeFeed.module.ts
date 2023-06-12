import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeedModule } from 'src/app/shared/components/Feed/feed.module';
import { BannerModule } from 'src/app/shared/components/banner/banner.module';
import { PopularTagsComponent } from 'src/app/shared/components/popularTags/component/popularTags.component';
import { FeedTogglerComponent } from 'src/app/shared/components/feedToggler/feedToggler.component';
import { GlobalFeedComponent } from './globalFeed/component/globalFeed/globalFeed.component';
import { YourFeedComponent } from './yourFeed/component/yourFeed.component';
import { TagFeedComponent } from './tagFeed/component/tagFeed.component';
import { AddToFavoriteModule } from '../shared/components/addToFavorite/addToFavorite.module';


const routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
  {
    path: 'yourFeed',
    component: YourFeedComponent,
  },
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsComponent,
    FeedTogglerComponent,
  ],
  declarations: [GlobalFeedComponent, YourFeedComponent,TagFeedComponent],
})
export class HomeFeedModule {}

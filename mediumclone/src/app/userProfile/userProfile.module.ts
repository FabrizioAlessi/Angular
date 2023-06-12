import { profileReducer } from './store/userProfileRecucers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserProfileComponent } from './component/userProfile.component';
import { RouterModule } from '@angular/router';
import { UserProfileService } from './services/userProfile.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserProfileEffect } from './store/userProfileEffects';
import { FeedModule } from '../shared/components/Feed/feed.module';

const routes = [
  {
    path: ':slug',
    component: UserProfileComponent,
  },
  {
    path: ':slug/favorites',
    component: UserProfileComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('profile', profileReducer),
    EffectsModule.forFeature([UserProfileEffect]),
    FeedModule
  ],
  declarations: [UserProfileComponent],
  providers: [UserProfileService],
})
export class UserProfileModule {}

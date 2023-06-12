import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreateArticleComponent } from './component/createArticle.component';
import { RouterModule } from '@angular/router';
import { ArticleFormModule } from '../shared/components/articleForm/articleForm.module';

import { EffectsModule } from '@ngrx/effects';
import {
  CreateArticleEffect,
} from './store/createArticleEffect';
import { StoreModule } from '@ngrx/store';
import { createArticleReducer } from './store/createArticleReducer';
import { CreateArticleService } from './service/createArticle.service';
import { redirectAfterCreate } from './store/redirectAfterCreateEffect';
import { PopularTagsComponent } from '../shared/components/popularTags/component/popularTags.component';

const routes = [
  {
    path: '',
    component: CreateArticleComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', createArticleReducer),
    PopularTagsComponent
  ],
  declarations: [CreateArticleComponent],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}

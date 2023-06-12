import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticleComponent } from './components/article.component';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffect, DeleteArticleEffect } from './store/articleEffect';
import { StoreModule } from '@ngrx/store';
import { articleReducer } from './store/reducers';
import { TagListComponent } from '../shared/components/tagList/tagList.component';
import { ArticleService } from '../shared/services/article.service';

const routes = [
  {
    path: ':slug',
    component: ArticleComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([ArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature('article', articleReducer),
    TagListComponent
  ],
  declarations: [ArticleComponent],
  providers: [ArticleService]
})
export class ArticleModule {}

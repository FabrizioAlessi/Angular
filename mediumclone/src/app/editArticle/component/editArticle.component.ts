import {
  isSubmittingEditSelector,
  errorEditArticleSelector,
  isLoadingEditSelector,
} from './../store/editArticleSelector';
import { ArticlesInterface } from './../../shared/types/articles.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest, filter, map, tap } from 'rxjs';
import { ArticleFormInterface } from 'src/app/shared/components/articleForm/types/articleForm.interface';
import { getArticle, updateArticle } from '../store/editArticleActions';
import { editArticleSelector } from '../store/editArticleSelector';

@Component({
  selector: 'app-edit-article',
  templateUrl: './editArticle.component.html',
  styleUrls: ['./editArticle.component.css'],
})
export class EditArtcticleComponent implements OnInit {
  intialValue$: Observable<ArticleFormInterface> = this.store.pipe(
    select(editArticleSelector),
    filter((article): article is ArticlesInterface => article !== null),
    map((article: ArticlesInterface) => {
      return {
        title: article.title,
        description: article.description,
        body: article.body,
        tagList: article.tagList,
      };
    })
  );
  slug = this.route.snapshot.paramMap.get('slug') ?? '';
  data$ = combineLatest({
    isSubmitting: this.store.select(isSubmittingEditSelector),
    isLoading: this.store.select(isLoadingEditSelector),
    backendErrors: this.store.select(errorEditArticleSelector),
    initialValues: this.intialValue$,
  });

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(getArticle({ slug: this.slug }));
  }
  onSubmit(articleFormValues: any) {
    const request = {
      article: articleFormValues,
    };
    this.store.dispatch(updateArticle({ slug: this.slug, request }));
  }
}

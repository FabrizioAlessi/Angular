import { ArticleFormInterface } from 'src/app/shared/components/articleForm/types/articleForm.interface';
import { CreateArticleModule } from './../createArticle.module';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { isSubmittingSelector } from '../store/createArticleSelector';
import { errorCreateArticleSelector } from '../store/createArticleSelector';
import { ArticleRequestInterface } from 'src/app/shared/components/articleForm/types/articleRequest.interface';
import { createArticle } from '../store/createArticleAction';

@Component({
  selector: 'app-create-article',
  templateUrl: './createArticle.component.html',
  styleUrls: ['./createArticle.component.css'],
})
export class CreateArticleComponent {
  intialValue = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };
  data$ = combineLatest({
    isSubmitting: this.store.select(isSubmittingSelector),
    backendErrors: this.store.select(errorCreateArticleSelector),
  });
  constructor(private store: Store) {}
  onSubmit(articleFormValue: any) {
    const request = {
      article: articleFormValue,
    };
    this.store.dispatch(createArticle({ request }));
  }
}

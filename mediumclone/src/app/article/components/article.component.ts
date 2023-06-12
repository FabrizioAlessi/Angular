import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { deleteArticle, getArticle } from "../store/articleActions";
import { ActivatedRoute } from "@angular/router";
import { Observable, combineLatest, filter, map } from "rxjs";
import { isLoadingSelector } from "src/app/shared/components/Feed/store/selectors";
import { dataArticleSelector } from "../store/articleSelector";
import { currentUserSelector } from "src/app/store/selectors/authSelectors";


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})

export class ArticleComponent implements OnInit {

  constructor(private store:Store, private route:ActivatedRoute){}
  slug = this.route.snapshot.paramMap.get('slug') ?? ''

  isAuthor$ = combineLatest({
    article: this.store.select(dataArticleSelector),
    currentUser: this.store.select(currentUserSelector).pipe(filter((currentUser)=> currentUser !== undefined))
  }
  ).pipe(map(({article, currentUser}) => {
    if (!article || !currentUser){
      return false
    }
    return article.author.username == currentUser.user?.username
  }))

  data$!:Observable<any>

  ngOnInit(): void {
    this.store.dispatch(getArticle({slug : this.slug}))
    this.data$ = combineLatest({
      isLoading: this.store.select(isLoadingSelector),
      article: this.store.select(dataArticleSelector),
      isAuthor: this.isAuthor$
    })
  }
  deleteArticle(){
    this.store.dispatch(deleteArticle({slug: this.slug}))
  }
  }

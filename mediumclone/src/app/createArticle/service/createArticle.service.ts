import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { ArticleRequestInterface } from "src/app/shared/components/articleForm/types/articleRequest.interface";
import { ArticlesInterface } from "src/app/shared/types/articles.interface";
import { environment } from "src/environments/environment";
import { ArticleResponseInterface } from "../types/createArticleResponse.interface";

@Injectable()

export class CreateArticleService {
  constructor(private http:HttpClient){}

  createArticle(atricleRequest: ArticleRequestInterface):Observable<ArticlesInterface>{
    const fullUrl = environment.apiUrl + '/articles'
    return this.http.post<ArticleResponseInterface>(fullUrl, atricleRequest)
    .pipe(map((response) => response.article))
  }
}

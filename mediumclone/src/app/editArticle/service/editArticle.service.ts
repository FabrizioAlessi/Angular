import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { ArticleResponseInterface } from "src/app/createArticle/types/createArticleResponse.interface";
import { ArticleRequestInterface } from "src/app/shared/components/articleForm/types/articleRequest.interface";
import { ArticlesInterface } from "src/app/shared/types/articles.interface";
import { environment } from "src/environments/environment";

@Injectable()

export class EditArticleService {
  constructor(private http:HttpClient){}

  updateArticle(slug:string, ariticleRequest:ArticleRequestInterface):Observable<ArticlesInterface>{
    const fullUrl = `${environment.apiUrl}/articles/${slug}`

    return this.http.put<ArticleResponseInterface>(fullUrl, ariticleRequest)
    .pipe(map((response) => response.article))
  }
}

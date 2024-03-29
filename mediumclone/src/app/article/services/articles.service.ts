import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn:'root'
})

export class ArticlesService{
  constructor(private http:HttpClient){}
  deleteArticle(slug:string){
    const fullUrl = `${environment.apiUrl}/articles/${slug}`
    return this.http.delete(fullUrl)
  }
}

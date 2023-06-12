import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FeedResponseInterface } from "../Types/feedResponse.interface";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class FeedService {

  constructor( private http:HttpClient){}
  getFeed(url:string):Observable<FeedResponseInterface>{
    //NOTA, passiamo un url: string come parametro al service per riutilizzare il servizio su tutte le chiamate GET (basta fornire come input la query di ricerca)
    const fullUrl = environment.apiUrl + url
    return this.http.get<FeedResponseInterface>(fullUrl)
  }
}

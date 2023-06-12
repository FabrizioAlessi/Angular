import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RegisterReqInterface } from "../authTypes/registerReq.interface";
import { environment } from "src/environments/environment";
import { currentUserInterface } from "../authTypes/currentUser.interface";
import { Observable, map, tap } from "rxjs";
import { LoginReqInterface } from "../authTypes/loginReq.interface";
import { CurrentUserReqInterface } from "src/app/shared/types/currentUserReq.interface";
//https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints/ LINK ALL'API
@Injectable()
export class AuthService {
  constructor(private http:HttpClient){}
  getUser (response:any):currentUserInterface{
    return response
  }
  registration(data:RegisterReqInterface){
    const url = environment.apiUrl + '/users'
    return this.http.post<currentUserInterface>(url, data).pipe(map((this.getUser)))
  }
  login(data:LoginReqInterface){
    const url = environment.apiUrl + '/users/login'
    return this.http.post<currentUserInterface>(url, data).pipe(map(this.getUser))
  }
  getCurrentUser(): Observable<currentUserInterface> {
    const url = environment.apiUrl + '/user'
    return this.http.get(url).pipe(map(this.getUser))
  }
  updateCurrentUser(currentUserReq: CurrentUserReqInterface): Observable<currentUserInterface> {
    const url = environment.apiUrl + '/user'
    return this.http.put(url, currentUserReq).pipe(map(this.getUser))
  }
}

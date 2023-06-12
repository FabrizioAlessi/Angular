import { PersistenceService } from './persistence.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class Interceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.PersistenceService.get('accessToken')
    req = req.clone({
      setHeaders:{
        Authorization: token ? `Token ${token}` : ''
      }
    })
    return next.handle(req)
  }
  constructor(private PersistenceService:PersistenceService){}
}

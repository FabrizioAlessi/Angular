import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { Observable, of } from "rxjs";

@Injectable()
 export class MatchPasswordService {
  checkPassword(psw:string, confirmPsw:string): Observable<boolean>{
    return of(psw !== confirmPsw)
  }
 }

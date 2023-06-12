import { Injectable } from "@angular/core";

@Injectable()
export class PersistenceService {
  set(key:string, data:any):void {
    try{
      localStorage.setItem(key, JSON.stringify(data))
    } catch (err) {
      console.error('error occurred during saving to localStorage', err)
    }
  }
  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key)!)
    } catch (e) {
      console.error('Error getting data from localStorage', e)
      return null
    }
  }
}



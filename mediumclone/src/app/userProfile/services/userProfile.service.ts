import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetUSerProfileInterface } from '../types/getUserProfile.interface';
import { UserProfileInterface } from '../types/userProfile.interface';

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {}
  getUserProfile(slug: string): Observable<UserProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}`;
    return this.http
      .get<GetUSerProfileInterface>(url)
      .pipe(map((response) => response.profile));
  }
}

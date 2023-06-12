import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PopularTagsResponseInterface } from '../../Feed/Types/popularTagsResponse.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopularTagsService {
  constructor(private http: HttpClient) {}
  getPopularTags() {
    const url = environment.apiUrl + '/tags';
    return this.http
      .get<PopularTagsResponseInterface>(url)
      .pipe(map((response) => response.tags));
  }
}

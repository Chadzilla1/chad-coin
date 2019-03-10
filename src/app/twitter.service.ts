import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  api_url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTimeline() {
    return this.http
      .get<any[]>(this.api_url + '/home_timeline')
      .pipe(map(data => data));

  }

  getUserTimeline(name: string) {
    return this.http
      .get<any[]>(this.api_url + '/user_timeline/' + name)
      .pipe(map(data => data));
  }

  getMentions() {
    return this.http
      .get<any[]>(this.api_url + '/mentions_timeline')
      .pipe(map(data => data));

  }
}

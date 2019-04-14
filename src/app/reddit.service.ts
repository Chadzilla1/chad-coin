import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

API_URL = 'https://www.reddit.com/r/giantbomb.json';

  results: any[];

  constructor(private http: HttpClient) { }

  getGBJson() {
    let promise = new Promise((resolve, reject) => {
     // return this.http.get<[]>('../../assets/' + name + '.json')
     return this.http.get<[]>(this.API_URL)
        .pipe(map(data => data)).toPromise().then(
          res => {
            console.log(res);
            this.results = res;
            resolve(res);
          });
    });
    return promise;
  }
}

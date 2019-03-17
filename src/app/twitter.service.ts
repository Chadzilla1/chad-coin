import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  API_URL = 'http://localhost:3000';

  results: any[];

  constructor(private http: HttpClient) { }

  getTimeline() {
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<any[]>(this.API_URL + '/home_timeline')
        .pipe(map(data => data)).toPromise().then(
          res => {
            console.log(res);
            this.results = res;
            resolve();
            return res;
          });
    });
  }

  getUser(id: string) {
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<any[]>(this.API_URL + '/users/show/' + id)
        .pipe(map(data => data)).toPromise().then(
          res => {
            console.log(res);
            this.results = res;
            resolve(res);
          });
    });
    return promise;
  }

  getUserTimeline(name: string) {
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<any[]>(this.API_URL + '/user_timeline/' + name)
        .pipe(map(data => data)).toPromise().then(
          res => {
            //  console.log(res);
            //  this.results = res;
            resolve(res);
          });
    });
    return promise;
  }

  getMentions() {
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<any[]>(this.API_URL + '/mentions_timeline')
        .pipe(map(data => data)).toPromise().then(
          res => {
            console.log(res);
            resolve();
          });
    });
    return promise;
  }
}

import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  API_URL = 'http://localhost:3000';

  results: any[];

  constructor(private http: HttpClient) { }

  filterStatuses(name: string): Observable<any[]> {
    return this.http
      .get<any[]>(this.API_URL + '/statuses/filter/' + name)
      .pipe(map(data => data));
  }

  //giant-bomb-angular-fresh/
  getJson(name: string) {
    let promise = new Promise((resolve, reject) => {
      //  return this.http.get<[]>('../../assets/' + name + '.json')
      return this.http.get<[]>('../../giant-bomb-angular-fresh/assets/' + name + '.json')
        .pipe(map(data => data)).toPromise().then(
          res => {
            console.log(res);
            this.results = res;
            resolve(res);
          });
    });
    return promise;
  }

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

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  savedTweets: any[] = [];

  savedRedditPosts: any[] = [];

  savedTweets2: any[] = [];

}

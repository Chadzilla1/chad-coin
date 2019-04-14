import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';
import { bounce, fadeIn } from 'ng-animate';
import { trigger, transition, useAnimation } from '@angular/animations';
import { Router, NavigationStart } from '@angular/router';
import { DataService } from '../data.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))]),
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])

  ],
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {

  constructor(private api: TwitterService, private router: Router, private dataService: DataService) { }

  private routeSub: any;  // subscription to route observer

  dudersTweets: any[];
  friendsTweets: any[];
  tweets: any[] = [];

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  ngOnInit() {

    this.routeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // save your data
        console.log("Detected navigation away event, saving data");

        this.dataService.savedTweets2 = this.dataService.savedTweets2.concat(this.tweets);

      }
    });

    this.tweets = this.dataService.savedTweets2;
    if (this.tweets != undefined) {
      if (this.tweets.length === 0) {
        this.getAllJson('duders');
      }
    } else {
      this.getAllJson('duders');
    }
  }

  private getTime(date?: Date) {
    return date != null ? date.getTime() : 0;
}


public sortByDate(): void {
    this.tweets.sort((a: any, b: any) => {
        return this.getTime(new Date(a.created_at)) - this.getTime(new Date(b.created_at));
    });
    this.tweets.reverse();
}

  extractTweets() {
    this.dudersTweets.forEach(element => {
      element.data.forEach(element => {
        this.tweets.push(element);
      });
    });
    // console.log("Tweets: " + JSON.stringify(this.tweets));
    this.tweets.forEach(element => {
      console.log(JSON.stringify(element));
    });
    this.sortByDate();
    this.tweets.forEach(element => {
      console.log(JSON.stringify(element.created_at));
    });
  }

  getAllJson(name: string) {
    if (name === 'duders') {
      Promise.all([
        this.api.getUserTimeline('jeff'),
         this.api.getUserTimeline('alex'),
        this.api.getUserTimeline('brad'),
        this.api.getUserTimeline('ben'),
        this.api.getUserTimeline('abby'),
        this.api.getUserTimeline('jan'),
        this.api.getUserTimeline('jason'),
       /* this.api.getUserTimeline('dan'),
        this.api.getUserTimeline('vinny'),
        this.api.getUserTimeline('rorie'),
        this.api.getUserTimeline('jeff-bakalar') */
      ]).then(values => {
        this.dudersTweets = values;
        console.log(this.dudersTweets);
        this.extractTweets();
      }
      );
    }
    else if (name === 'friends') {
      Promise.all([
        this.api.getUserTimeline('austin'),
        this.api.getUserTimeline('danny'),
        this.api.getUserTimeline('drew'),
        this.api.getUserTimeline('mary'),
        this.api.getUserTimeline('patrick')
      ]).then(values => {
        this.friendsTweets = values;
        console.log(this.friendsTweets);
        this.extractTweets();
      }
      );
    }
  }
}

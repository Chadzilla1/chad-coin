import { DataService } from './../data.service';
import { RedditService } from './../reddit.service';
import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/reddit/giant-bomb-reddit.json';
import { Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.scss']
})
export class RedditComponent implements OnInit {

  constructor(private redditService: RedditService, private dataService: DataService, private router: Router) { }

  private routeSub: any;  // subscription to route observer
  posts: any[] = [];
  json: any;

  ngOnInit() {
    console.log(data.default);
    console.log(data);

    //this.posts = data.default.data.children;

    this.routeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // save your data
        console.log("Detected navigation event, saving data");

        this.dataService.savedRedditPosts = this.dataService.savedRedditPosts.concat(this.posts);
      }
    });

    this.posts = this.dataService.savedRedditPosts;

    if (this.posts.length === 0) {
      this.getReddit();
    }
  }

  getReddit() {
    this.redditService.getGBJson().then(
      res => {
        this.json = res;
        this.posts = this.json.data.children;
      });
  }
}

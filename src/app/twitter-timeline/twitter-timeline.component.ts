import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


export interface Opts {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-twitter-timeline',
  templateUrl: './twitter-timeline.component.html',
  styleUrls: ['./twitter-timeline.component.scss']
})
export class TwitterTimelineComponent implements OnInit {

  myTimeline: any;
  name: string;
  url: string;
  selected = '10';
  opts = { tweetLimit: this.selected }


  options: Opts[] = [
    { value: 5, viewValue: '5' },
    { value: 10, viewValue: '10' },
    { value: 15, viewValue: '15' },
    { value: 15, viewValue: '15' },
    { value: 30, viewValue: '20' }
  ];

  constructor(private api: TwitterService, private route: ActivatedRoute, private router: Router) { }

  /* updateOpts(num: number) {
    this.opts = { tweetLimit: num }
  } */

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.name = this.route.snapshot.paramMap.get('name');
      console.log(this.name);
      //  this.getTwitterUserTimeline(this.name);
    });
  }

  getTwitterUserTimeline(name: string) {
    this.api.getUserTimeline(name).then(
      res => {
        console.log(res);
        this.myTimeline = res;
        this.url = this.myTimeline.data[0].user.profile_image_url;
        this.url = this.url.substring(0, this.url.length - 10);
        this.url = this.url + '400x400.jpg';
        console.log(this.url);
      });
  }
}

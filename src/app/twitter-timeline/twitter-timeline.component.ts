import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { TwitterService } from '../twitter.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-twitter-timeline',
  templateUrl: './twitter-timeline.component.html',
  styleUrls: ['./twitter-timeline.component.scss']
})
export class TwitterTimelineComponent implements OnInit {

  myTimeline: any;
  name: string;

  constructor(private api: TwitterService, private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.name = this.route.snapshot.paramMap.get('name');
      this.getTwitterUserTimeline(this.name);

    });
  }

  getTwitterTimeline(): void {
    this.api.getTimeline()
      .subscribe(
        myTimeline => {
          this.myTimeline = myTimeline;
          console.log(this.myTimeline);
        }
      )
  }

  getTwitterUserTimeline(name: string): void {
    this.api.getUserTimeline(name)
      .subscribe(
        myTimeline => {
          this.myTimeline = myTimeline;
          console.log(this.myTimeline);
        }
      )
  }
}

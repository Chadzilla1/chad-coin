import { Component, OnInit } from '@angular/core';
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

  constructor(private api: TwitterService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.name = this.route.snapshot.paramMap.get('name');
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  myTimeline: any;
  name: string;

  constructor(private api: TwitterService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.name = this.route.snapshot.paramMap.get('name');
      this.getTwitterUserTimeline(this.name);
    });
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

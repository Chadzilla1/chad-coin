import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';

export interface Chart {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  single: any[];
  multi: any[];
  totalTweets: any;
  totalFollowers: any;
  totalFavourites: any;
  totalFriends: any;
  totalRetweets: any;
  view: any[] = [700, 400];
  myTimelines: any[];
  myTimeline: any;
  selected = 'bar-vertical';

  charts: Chart[] = [
    {value: 'bar-vertical', viewValue: 'Bar Chart'},
    {value: 'pie', viewValue: 'Pie Chart'},
    {value: 'pie-advanced', viewValue: 'Advanced Pie Chart'}
  ];

  name = 'jeff';
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Duders';
  showYAxisLabel = true;
  yAxisLabel = 'Tweets';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private api: TwitterService) {
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
    this.getTwitterUserTimeline('jeff');
    this.getAll();
  }

  getAll() {
    Promise.all([
      this.api.getUserTimeline('jeff'),
      this.api.getUserTimeline('alex'),
      this.api.getUserTimeline('brad'),
    ]).then(values => {
      this.createData(values);
    }
    );
  }

  getTwitterUserTimeline(name: string) {
    this.api.getUserTimeline(name).then(
      res => {
        console.log(res);
        this.myTimeline = res;
      });
  }

  createData(timelines: any[]) {
    this.totalTweets = [
      {
        "name": "jeff",
        "value": timelines[0].data[0].user.statuses_count
      },
      {
        "name": "alex",
        "value": timelines[1].data[0].user.statuses_count
      },
      {
        "name": "brad",
        "value": timelines[2].data[0].user.statuses_count
      }
    ];
    this.totalFollowers = [
      {
        "name": "jeff",
        "value": timelines[0].data[0].user.followers_count
      },
      {
        "name": "alex",
        "value": timelines[1].data[0].user.followers_count
      },
      {
        "name": "brad",
        "value": timelines[2].data[0].user.followers_count
      }
    ];
    this.totalFavourites = [
      {
        "name": "jeff",
        "value": timelines[0].data[0].user.favourites_count
      },
      {
        "name": "alex",
        "value": timelines[1].data[0].user.favourites_count
      },
      {
        "name": "brad",
        "value": timelines[2].data[0].user.favourites_count
      }
    ];
    this.totalFriends = [
      {
        "name": "jeff",
        "value": timelines[0].data[0].user.friends_count
      },
      {
        "name": "alex",
        "value": timelines[1].data[0].user.friends_count
      },
      {
        "name": "brad",
        "value": timelines[2].data[0].user.friends_count
      }
    ];
  }
}

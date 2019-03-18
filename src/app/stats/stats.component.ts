import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';




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
  json: any;
  view: any[];
  myTimelines: any[];
  myTimeline: any;
  selected = 'bar-vertical';

  charts: Chart[] = [
    { value: 'bar-vertical', viewValue: 'Vertical Bar Chart' },
    { value: 'bar-horizontal', viewValue: 'Horizontal Bar Chart' },
    { value: 'pie', viewValue: 'Pie Chart' },
    { value: 'pie-advanced', viewValue: 'Advanced Pie Chart' }
  ];

  name = 'jeff';
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Duders';
  showYAxisLabel = false;
  yAxisLabel = 'Tweets';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#ff80ff', '#400080', '#ff8040', '#ffff80', '#400040', '#0000ff', '#400000']
  };
  width;
  height;

  constructor(private api: TwitterService, private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.width = window.innerWidth;
    console.log(this.width);
    this.height = window.innerHeight;
    console.log(this.height);
    this.view = [this.width * 0.8, this.height * 0.65];
    console.log(this.view);
    if (this.width > 700) {
      this.showLegend = true;
      this.showXAxisLabel = true;
      this.showYAxisLabel = true;
    }
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.name = this.route.snapshot.paramMap.get('name');
      console.log("Stats name: " + this.name);
      //  this.getTwitterUserTimeline(this.name);
      this.getAllJson(this.name);
      this.xAxisLabel = this.name;
    });
  }

  getAllJson(name: string) {
    if (name === 'duders') {
      Promise.all([
        this.api.getJson('jeff'),
        this.api.getJson('alex'),
        this.api.getJson('brad'),
        this.api.getJson('ben'),
        this.api.getJson('abby'),
        this.api.getJson('jan'),
        this.api.getJson('jason'),
        this.api.getJson('dan'),
        this.api.getJson('vinny'),
        this.api.getJson('rorie'),
        this.api.getJson('jeff-bakalar')
      ]).then(values => {
        this.createData(values);
      }
      );
    }
    else if (name === 'friends') {
      Promise.all([
        this.api.getJson('austin'),
        this.api.getJson('danny'),
        this.api.getJson('drew'),
        this.api.getJson('mary'),
        this.api.getJson('patrick')
      ]).then(values => {
        this.createDataFriends(values);
      }
      );
    }
  }


  getJson(name: string) {
    this.api.getJson(name).then(
      res => {
        console.log(res);
        this.json = res;
      });
  }

  getTwitterUserTimeline(name: string) {
    this.api.getUserTimeline(name).then(
      res => {
        console.log(res);
        this.myTimeline = res;
      });
  }

  getUser(name: string) {
    this.api.getUser(name).then(
      res => {
        console.log(res);
        this.myTimeline = res;
      });
  }
  createDataFriends(jsonArray: any[]) {
    this.totalTweets = [
      {
        "name": "danny",
        "value": jsonArray[0].data.statuses_count
      },
      {
        "name": "drew",
        "value": jsonArray[1].data.statuses_count
      },
      {
        "name": "mary",
        "value": jsonArray[2].data.statuses_count
      },
      {
        "name": "patrick",
        "value": jsonArray[3].data.statuses_count
      }
    ];
    this.totalFollowers = [
      {
        "name": "danny",
        "value": jsonArray[0].data.followers_count
      },
      {
        "name": "drew",
        "value": jsonArray[1].data.followers_count
      },
      {
        "name": "mary",
        "value": jsonArray[2].data.followers_count
      },
      {
        "name": "patrick",
        "value": jsonArray[3].data.followers_count
      }
    ];
    this.totalFavourites = [
      {
        "name": "danny",
        "value": jsonArray[0].data.favourites_count
      },
      {
        "name": "drew",
        "value": jsonArray[1].data.favourites_count
      },
      {
        "name": "mary",
        "value": jsonArray[2].data.favourites_count
      },
      {
        "name": "patrick",
        "value": jsonArray[3].data.favourites_count
      }
    ];
    this.totalFriends = [
      {
        "name": "danny",
        "value": jsonArray[0].data.friends_count
      },
      {
        "name": "drew",
        "value": jsonArray[1].data.friends_count
      },
      {
        "name": "mary",
        "value": jsonArray[2].data.friends_count
      },
      {
        "name": "patrick",
        "value": jsonArray[3].data.friends_count
      }
    ];
  }

  createData(jsonArray: any[]) {
    this.totalTweets = [
      {
        "name": "jeff",
        "value": jsonArray[0].data.statuses_count
      },
      {
        "name": "alex",
        "value": jsonArray[1].data.statuses_count
      },
      {
        "name": "brad",
        "value": jsonArray[2].data.statuses_count
      },
      {
        "name": "ben",
        "value": jsonArray[3].data.statuses_count
      },
      {
        "name": "abby",
        "value": jsonArray[4].data.statuses_count
      },
      {
        "name": "jan",
        "value": jsonArray[5].data.statuses_count
      },
      {
        "name": "jason",
        "value": jsonArray[6].data.statuses_count
      },
      {
        "name": "dan",
        "value": jsonArray[7].data.statuses_count
      },
      {
        "name": "vinny",
        "value": jsonArray[8].data.statuses_count
      },
      {
        "name": "rorie",
        "value": jsonArray[9].data.statuses_count
      },
      {
        "name": "jeff-bakalar",
        "value": jsonArray[10].data.statuses_count
      }
    ];
    this.totalFollowers = [
      {
        "name": "jeff",
        "value": jsonArray[0].data.followers_count
      },
      {
        "name": "alex",
        "value": jsonArray[1].data.followers_count
      },
      {
        "name": "brad",
        "value": jsonArray[2].data.followers_count
      },
      {
        "name": "ben",
        "value": jsonArray[3].data.followers_count
      },
      {
        "name": "abby",
        "value": jsonArray[4].data.followers_count
      },
      {
        "name": "jan",
        "value": jsonArray[5].data.followers_count
      },
      {
        "name": "jason",
        "value": jsonArray[6].data.followers_count
      },
      {
        "name": "dan",
        "value": jsonArray[7].data.followers_count
      },
      {
        "name": "vinny",
        "value": jsonArray[8].data.followers_count
      },
      {
        "name": "rorie",
        "value": jsonArray[9].data.followers_count
      },
      {
        "name": "jeff-bakalar",
        "value": jsonArray[10].data.followers_count
      }
    ];
    this.totalFavourites = [
      {
        "name": "jeff",
        "value": jsonArray[0].data.favourites_count
      },
      {
        "name": "alex",
        "value": jsonArray[1].data.favourites_count
      },
      {
        "name": "brad",
        "value": jsonArray[2].data.favourites_count
      },
      {
        "name": "ben",
        "value": jsonArray[3].data.favourites_count
      },
      {
        "name": "abby",
        "value": jsonArray[4].data.favourites_count
      },
      {
        "name": "jan",
        "value": jsonArray[5].data.favourites_count
      },
      {
        "name": "jason",
        "value": jsonArray[6].data.favourites_count
      },
      {
        "name": "dan",
        "value": jsonArray[7].data.favourites_count
      },
      {
        "name": "vinny",
        "value": jsonArray[8].data.favourites_count
      },
      {
        "name": "rorie",
        "value": jsonArray[9].data.favourites_count
      },
      {
        "name": "jeff-bakalar",
        "value": jsonArray[10].data.favourites_count
      }
    ];
    this.totalFriends = [
      {
        "name": "jeff",
        "value": jsonArray[0].data.friends_count
      },
      {
        "name": "alex",
        "value": jsonArray[1].data.friends_count
      },
      {
        "name": "brad",
        "value": jsonArray[2].data.friends_count
      },
      {
        "name": "ben",
        "value": jsonArray[3].data.friends_count
      },
      {
        "name": "abby",
        "value": jsonArray[4].data.friends_count
      },
      {
        "name": "jan",
        "value": jsonArray[5].data.friends_count
      },
      {
        "name": "jason",
        "value": jsonArray[6].data.friends_count
      },
      {
        "name": "dan",
        "value": jsonArray[7].data.friends_count
      },
      {
        "name": "vinny",
        "value": jsonArray[8].data.friends_count
      },
      {
        "name": "rorie",
        "value": jsonArray[9].data.friends_count
      },
      {
        "name": "jeff-bakalar",
        "value": jsonArray[10].data.friends_count
      }
    ];
  }
}

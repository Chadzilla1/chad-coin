import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
/* import * as abbyJson from '../../assets/abby.json';
import * as alexJson from '../../assets/alex.json';
import * as benJson from '../../assets/ben.json';
import * as bradJson from '../../assets/brad.json';
import * as janJson from '../../assets/jan.json';
import * as jasonJson from '../../assets/jason.json';
import * as jeffJson from '../../assets/jeff.json'; */
import { HttpClient } from '@angular/common/http';




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
  view: any[] = [350, 370];
  myTimelines: any[];
  myTimeline: any;
  selected = 'bar-vertical';

  charts: Chart[] = [
    { value: 'bar-vertical', viewValue: 'Bar Chart' },
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
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#ff80ff', '#400080', '#ff8040']
  };

  constructor(private api: TwitterService, private http: HttpClient) {
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
    //this.createDataJson();
    //this.getAll();
    this.getAllJson();
  }

  getAll() {
    Promise.all([
      this.api.getUserTimeline('jeff'),
      this.api.getUserTimeline('alex'),
      this.api.getUserTimeline('brad'),
      this.api.getUserTimeline('ben'),
      this.api.getUserTimeline('abby'),
      this.api.getUserTimeline('jan'),
      this.api.getUserTimeline('jason'),
    ]).then(values => {
      this.createData(values);
    }
    );
  }

  getAllJson() {
    Promise.all([
      this.api.getJson('jeff'),
      this.api.getJson('alex'),
      this.api.getJson('brad'),
      this.api.getJson('ben'),
      this.api.getJson('abby'),
      this.api.getJson('jan'),
      this.api.getJson('jason'),
    ]).then(values => {
      this.createData(values);
    }
    );
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
      }
    ];
  }

  /* createDataJson() {
    var jeff: any = jeffJson
    this.totalTweets = [
      {
        "name": "jeff",
        "value": jeff
      },
      {
        "name": "alex",
        "value": alexJson.default.data.statuses_count
      },
      {
        "name": "brad",
        "value": bradJson.default.data.statuses_count
      },
      {
        "name": "ben",
        "value": benJson.default.data.statuses_count
      },
      {
        "name": "abby",
        "value": abbyJson.default.data.statuses_count
      },
      {
        "name": "jan",
        "value": janJson.default.data.statuses_count
      },
      {
        "name": "jason",
        "value": jasonJson.default.data.statuses_count
      }
    ];
    this.totalFollowers = [
      {
        "name": "jeff",
        "value": jeffJson.default.data.followers_count
      },
      {
        "name": "alex",
        "value": alexJson.default.data.followers_count
      },
      {
        "name": "brad",
        "value": bradJson.default.data.followers_count
      },
      {
        "name": "ben",
        "value": benJson.default.data.followers_count
      },
      {
        "name": "abby",
        "value": abbyJson.default.data.followers_count
      },
      {
        "name": "jan",
        "value": janJson.default.data.followers_count
      },
      {
        "name": "jason",
        "value": jasonJson.default.data.statuses_count
      }
    ];
    this.totalFavourites = [
      {
        "name": "jeff",
        "value": jeffJson.default.data.favourites_count
      },
      {
        "name": "alex",
        "value": alexJson.default.data.favourites_count
      },
      {
        "name": "brad",
        "value": bradJson.default.data.favourites_count
      },
      {
        "name": "ben",
        "value": benJson.default.data.favourites_count
      },
      {
        "name": "abby",
        "value": abbyJson.default.data.favourites_count
      },
      {
        "name": "jan",
        "value": janJson.default.data.favourites_count
      },
      {
        "name": "jason",
        "value": jasonJson.default.data.statuses_count
      }
    ];
    this.totalFriends = [
      {
        "name": "jeff",
        "value": jeffJson.default.data.friends_count
      },
      {
        "name": "alex",
        "value": alexJson.default.data.friends_count
      },
      {
        "name": "brad",
        "value": bradJson.default.data.friends_count
      },
      {
        "name": "ben",
        "value": benJson.default.data.friends_count
      },
      {
        "name": "abby",
        "value": abbyJson.default.data.friends_count
      },
      {
        "name": "jan",
        "value": janJson.default.data.friends_count
      },
      {
        "name": "jason",
        "value": jasonJson.default.data.statuses_count
      }
    ];
  } */

  /* createData(timelines: any[]) {
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
      },
      {
        "name": "ben",
        "value": timelines[3].data[0].user.statuses_count
      },
      {
        "name": "abby",
        "value": timelines[4].data[0].user.statuses_count
      },
      {
        "name": "jan",
        "value": timelines[5].data[0].user.statuses_count
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
      },
      {
        "name": "ben",
        "value": timelines[3].data[0].user.followers_count
      },
      {
        "name": "abby",
        "value": timelines[4].data[0].user.followers_count
      },
      {
        "name": "jan",
        "value": timelines[5].data[0].user.followers_count
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
      },
      {
        "name": "ben",
        "value": timelines[3].data[0].user.favourites_count
      },
      {
        "name": "abby",
        "value": timelines[4].data[0].user.favourites_count
      },
      {
        "name": "jan",
        "value": timelines[5].data[0].user.favourites_count
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
      },
      {
        "name": "ben",
        "value": timelines[3].data[0].user.friends_count
      },
      {
        "name": "abby",
        "value": timelines[4].data[0].user.friends_count
      },
      {
        "name": "jan",
        "value": timelines[5].data[0].user.friends_count
      }
    ];
  } */
}

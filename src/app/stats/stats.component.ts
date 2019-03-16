import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
import { Observable } from 'rxjs/Observable';
import { ValueTransformer } from '@angular/compiler/src/util';

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
  myTimelineJeff: any;
  myTimelineAlex: any;
  myTimelineBrad: any;
  myTimelineBen: any;
  myTimelineAbby: any;
  myTimelineJason: any;
  myTimelineJan: any;

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

  constructor(private api: TwitterService, private route: ActivatedRoute, private router: Router) {
    //this.myTimeline = this.getTwitterUserTimeline('jeff');


  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
    this.getTwitterUserTimeline('jeff');
    this.getAll();
    // this.getAll();
    //  this.route.params.subscribe((params) => {
    // console.log(params);
    // this.name = this.route.snapshot.paramMap.get('name');
    // this.getTwitterUserTimeline('jeff');
    /// }); 
    // this.getTwitterUserTimeline('jeff');
    // let timelines = this.getTwitterUserTimelineAll();
    // this.createData(timelines);
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

    console.log("Total tweets: " + this.totalTweets);
    console.log("Total tweets jeff: " + this.totalTweets[0].name);
    console.log("Total tweets jeff: " + this.totalTweets[0].value);
    console.log("Total followers: " + this.totalFollowers);

  }

  getAll() {
    Promise.all([
      this.api.getUserTimeline('jeff'),
      this.api.getUserTimeline('alex'),
      this.api.getUserTimeline('brad'),
    ]).then(values => {
      console.log("values: " + values);
      this.createData(values);
    }
    );
  }

  /* getAll() {
    Promise.all([
      this.api.getUserTimeline('jeff').then(
        res => {
          console.log(res);
          this.myTimelines.push(res);
        }),
      this.api.getUserTimeline('alex').then(
        res => {
          console.log(res);
          this.myTimelines.push(res);
        }),    
    ]).then(values => {
      console.log("values: " + values);
      this.createData(this.myTimelines);
     // this.createData(values);
    }
    );
  } */

  /* async getTwitterUserTimeline(name: string) {
    return await this.api.getUserTimeline(name);
  } */

  getTwitterUserTimeline(name: string) {
    this.api.getUserTimeline(name).then(
      res => {
        console.log(res);
        this.myTimeline = res;
      });
  }

  /* getTwitterUserTimeline(name: string): void {
   this.api.getUserTimeline(name)
     .subscribe(
       myTimeline => {
         this.myTimeline = myTimeline;
 
         console.log(this.myTimeline);
       }
     )
 }  */

  /* getTwitterUserTimelineAll(): Observable<any[]> {
    let timelines : Observable<any[]>;

    this.api.getUserTimeline('jeff')
      .subscribe(
        myTimelineJeff => {
          this.myTimelineJeff = myTimelineJeff;
          timelines.push(myTimelineJeff);
          this.api.getUserTimeline('alex')
            .subscribe(
              myTimelineAlex => {
                this.myTimelineAlex = myTimelineAlex;
                timelines.push(myTimelineAlex);
                this.api.getUserTimeline('brad')
                  .subscribe(
                    myTimelineBrad => {
                      this.myTimelineBrad = myTimelineBrad;
                      timelines.push(myTimelineBrad);
                      this.api.getUserTimeline('ben')
                        .subscribe(
                          myTimelineBen => {
                            this.myTimelineBen = myTimelineBen;
                            timelines.push(myTimelineBen);
                            this.api.getUserTimeline('abby')
                              .subscribe(
                                myTimelineAbby => {
                                  this.myTimelineAbby = myTimelineAbby;
                                  timelines.push(myTimelineAbby);
                                  this.api.getUserTimeline('jason')
                                    .subscribe(
                                      myTimelineJason => {
                                        this.myTimelineJason = myTimelineJason;
                                        timelines.push(myTimelineJason);
                                        this.api.getUserTimeline('jan')
                                          .subscribe(
                                            myTimelineJan => {
                                              this.myTimelineJan = myTimelineJan;
                                              timelines.push(myTimelineJan);
                                            }
                                          )
                                      }
                                    )
                                }
                              )
                          }
                        )
                    }
                  )
              }
            )
        }
      )
    console.log(timelines.toString());
    return timelines;
  } */
}

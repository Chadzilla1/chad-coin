import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';
import { PodcastTimestamp } from './../models/podcast-timestamp.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-podcast-timestamp',
  templateUrl: './podcast-timestamp.component.html',
  styleUrls: ['./podcast-timestamp.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PodcastTimestampComponent implements OnInit {

  json: any;
  podcastTimestamps: PodcastTimestamp[] = [];
  podcastTimestampsUnfiltered: PodcastTimestamp[] = [];
  dataSource = new MatTableDataSource(this.podcastTimestamps);
  columnsToDisplay = ['title'];
  expandedElement: PodcastTimestamp | null;
  searchValue = '';
  constructor(private api: TwitterService) { }

  ngOnInit() {
    let b = "wow".includes("w")
    console.log("b inclues test: " + b)

    this.api.getJson('bombcast-timestamps').then(
      res => {
        this.json = res;
        this.loadJson()
      });

    this.dataSource.filterPredicate = (data: PodcastTimestamp, filter: string) => {
      return data.title == filter;
    };
  }

  resetFilters() {
    this.dataSource.filter = '';
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filterPredicate = (data: PodcastTimestamp, filter: string) => {
      return data.title.includes(filter);
    };

    this.dataSource.filter = filterValue;
  }

  applyFilterTopics(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filterPredicate = (data: PodcastTimestamp, filter: string) => {
      let filteredElems = data.parsedTimestamps.filter(t => {
        let x = t[1].toLowerCase();
        let y = x.includes(filterValue);
        console.log(x + " includes? : " + filterValue + " = " + y);
        return y;
      });
      let l = filteredElems.length
      return l != 0;
    };

    this.dataSource.filter = filterValue;
  }

  loadJson() {
    this.json.forEach(element => {
      this.podcastTimestamps.push(new PodcastTimestamp(element));
      this.podcastTimestampsUnfiltered.push(new PodcastTimestamp(element));
    });
    this.dataSource = new MatTableDataSource(this.podcastTimestamps);
  }

  parseYtLink(link: string) {
    return link.replace("https://www.youtube.com/watch?v=", "https://youtu.be/")
  }
}
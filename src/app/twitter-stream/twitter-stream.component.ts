import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-twitter-stream',
  templateUrl: './twitter-stream.component.html',
  styleUrls: ['./twitter-stream.component.scss']
})
export class TwitterStreamComponent implements OnInit {

  constructor(private api: TwitterService) {}

  ngOnInit() {
    this.api.filterStatuses("mango").subscribe(data => {
      console.log(data);
    });

  }
  
}

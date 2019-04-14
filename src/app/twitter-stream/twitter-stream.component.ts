import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';
import { SocketService } from '../socket-service.service';
import { NavigationStart, Router } from '@angular/router';
import { NgxLinkifyjsModule } from 'ngx-linkifyjs';
import { bounce, fadeInDown } from 'ng-animate';
import { trigger, transition, useAnimation } from '@angular/animations';

export enum Event {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect'
}

@Component({
  selector: 'app-twitter-stream',
  templateUrl: './twitter-stream.component.html',
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))]),
    trigger('fadeInDown', [transition('* => *', useAnimation(fadeInDown))])

  ],
  styleUrls: ['./twitter-stream.component.scss']
})
export class TwitterStreamComponent implements OnInit {

  constructor(private socketService: SocketService, private api: TwitterService, private router: Router) { }

  private routeSub: any;  // subscription to route observer

  ioConnection: any;

  tweets: any[] = [];

  ngOnInit() {
    /*  this.api.filterStatuses("mango").subscribe(data => {
       console.log(data);
     }); */
    this.routeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // save your data
        console.log("Detected navigation away event, saving data");

        this.socketService.savedTweets = this.socketService.savedTweets.concat(this.tweets);

        this.closeIoConnection();
      }
    });

    this.tweets = this.socketService.savedTweets;

    this.initIoConnection();
  }

  private initIoConnection(): void {
    this.socketService.initSocket();

    this.ioConnection = this.socketService.onMessage()
      .subscribe((tweet: any) => {
        //this.messages.push(message);
        let tweetObj = JSON.parse(tweet);
        console.log(tweetObj);
      //  this.tweets.push(tweetObj);
        this.tweets.unshift(tweetObj);
        console.log(this.tweets.length);
      });


    this.socketService.onEvent(Event.CONNECT)
      .subscribe(() => {
        console.log('connected');
      });

    this.socketService.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        console.log('disconnected');
      });
  }

  private closeIoConnection(): void {
    this.socketService.closeSocket();
    console.log('closed socket');
  }
}

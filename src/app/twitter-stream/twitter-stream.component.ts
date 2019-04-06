import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';
import { SocketService } from '../socket-service.service';

export enum Event {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect'
}

@Component({
  selector: 'app-twitter-stream',
  templateUrl: './twitter-stream.component.html',
  styleUrls: ['./twitter-stream.component.scss']
})
export class TwitterStreamComponent implements OnInit {

  constructor(private socketService: SocketService, private api: TwitterService) { }

  ioConnection: any;


  ngOnInit() {
   /*  this.api.filterStatuses("mango").subscribe(data => {
      console.log(data);
    }); */
    this.initIoConnection();
  }

  private initIoConnection(): void {
    this.socketService.initSocket();

    /* this.ioConnection = this.socketService.onMessage()
      .subscribe((message: Message) => {
        this.messages.push(message);
      }); */


    this.socketService.onEvent(Event.CONNECT)
      .subscribe(() => {
        console.log('connected');
      });

    this.socketService.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        console.log('disconnected');
      });
  }

}

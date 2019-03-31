import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-sound-board',
  templateUrl: './sound-board.component.html',
  styleUrls: ['./sound-board.component.scss']
})
export class SoundBoardComponent implements OnInit {

  name: string;
  width: number;
  height: number;
  isMobile;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.width = window.innerWidth;
    console.log(this.width);
    this.height = window.innerHeight;
    console.log(this.height);

    if (window.innerWidth < 400) {
      this.isMobile = true;
    }
    else {
      this.isMobile = false;
    }
    //this.view = [this.width * 0.8, this.height * 0.65];

    this.route.params.subscribe((params) => {
      this.name = this.route.snapshot.paramMap.get('name');
      console.log(this.name);
    });


  }

  playAudio(clipName: string) {
    let audio = new Audio();
    //let source = "../../assets/audio/" + clipName + ".mp4";
    let source = "../../giant-bomb-angular-fresh/assets/audio/" + clipName + ".mp4";
    audio.src = source;
    audio.load();
    audio.play();
  //  this.sendEvent('sound-board', "playAudio", clipName);
  }

  getImageUrl() {
    console.log("returning image url");
    return "url('../../assets/pictures/bigger.jpg')";
  }

  sendEvent(eventCategory: string, eventLabel: string, eventAction: string) {
    console.log("sending event to GA : " + eventLabel + ", " + eventAction);
    (<any>window).ga('send', 'event', {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: 10
    });
  }
}

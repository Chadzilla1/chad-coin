import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instagram-timeline',
  templateUrl: './instagram-timeline.component.html',
  styleUrls: ['./instagram-timeline.component.scss']
})
export class InstagramTimelineComponent implements OnInit {

  @Input() name:string;

  constructor() { 
  }

  ngOnInit() {
  }

}

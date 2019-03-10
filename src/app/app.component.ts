import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'giant-bomb-angular-fresh';
  name: string;
  currentComponent = 'twitter_timeline';

  setName(name: string) {
    this.name = name;
    console.log("Setting name to " + this.name.toString());
  }

  setTwitter() {
    this.currentComponent = 'twitter_timeline';
    console.log("Setting component to " + this.currentComponent.toString());
  }

  setInstagram() {
    this.currentComponent = 'instagram_timeline';
    console.log("Setting component to " + this.currentComponent.toString());
  }

  setStats() {
    this.currentComponent = 'stats';
    console.log("Setting component to " + this.currentComponent.toString());
  }
}

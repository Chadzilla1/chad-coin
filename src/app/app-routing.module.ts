import { SoundBoardComponent } from './sound-board/sound-board.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';
import { StatsComponent } from './stats/stats.component';
import { TwitterStreamComponent } from './twitter-stream/twitter-stream.component';
import { RedditComponent } from './reddit/reddit.component';
import { TwitterComponent } from './twitter/twitter.component';
import { PodcastTimestampComponent } from './podcast-timestamp/podcast-timestamp.component';

const routes: Routes = [
  {
    path: 'twitter_timeline/:name',
    component: TwitterTimelineComponent
  },
  {
    path: 'twitter_timeline',
    component: TwitterTimelineComponent
  },
  {
    path: 'stats',
    redirectTo: 'stats/duders',
    pathMatch: 'full'
  },
  {
    path: 'stats/:name',
    component: StatsComponent
  },
  {
    path: 'sound-board',
    component: SoundBoardComponent
  },
  {
    path: 'sound-board/:name',
    component: SoundBoardComponent
  },
  {
    path: 'twitter-stream',
    component: TwitterStreamComponent
  },
  {
    path: 'reddit',
    component: RedditComponent
  },
  {
    path: 'twitter',
    component: TwitterComponent
  },
  {
    path: 'bombcast-timestamps',
    component: PodcastTimestampComponent
  },
  {
    path: '',
    redirectTo: 'twitter_timeline/jeff',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

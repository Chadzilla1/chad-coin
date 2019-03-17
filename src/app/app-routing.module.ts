import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';
import { StatsComponent } from './stats/stats.component';

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
    component: StatsComponent
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

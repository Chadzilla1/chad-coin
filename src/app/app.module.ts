import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwitterService } from 'ng2-twitter';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import { MatCardModule } from "@angular/material";
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { InstagramTimelineComponent } from './instagram-timeline/instagram-timeline.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavigationComponent } from './navigation/navigation.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    TwitterTimelineComponent,
    InstagramTimelineComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    NgxTwitterTimelineModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [TwitterService, HttpClientModule],
  bootstrap: [AppComponent]
})


export class AppModule { 
}

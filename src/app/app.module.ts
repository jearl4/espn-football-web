import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LeagueInfoComponent } from './league-info/league-info.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { TeamRankingComponent } from './team-detail/team-ranking/team-ranking.component';
import { TeamRecordComponent } from './team-detail/team-record/team-record.component';

@NgModule({
  declarations: [
    AppComponent,
    LeagueInfoComponent,
    TeamRankingComponent,
    TeamRecordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

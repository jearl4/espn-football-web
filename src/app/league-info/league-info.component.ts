import { Component, OnInit } from '@angular/core';
import { leagueInfo } from '../dto/league-info';
import { LeagueInfoService } from '../league-info.service';

@Component({
  selector: 'app-league-info',
  templateUrl: './league-info.component.html',
  styleUrls: ['./league-info.component.scss'],
})
export class LeagueInfoComponent implements OnInit {
  leagueInfo: leagueInfo = {
    members: [
      {
        displayName: '',
        isLeagueManager: false,
      },
    ],
    seasonId: 0,
    settings: {
      name: '',
    },
    teams: [
      {
        abbrev: '',
        location: '',
        nickname: '',
      },
    ],
    status: {
      currentMatchupPeriod: 0,
    },
  };

  constructor(private leagueInfoService: LeagueInfoService) {}

  public getLeagueInfo(apiUrl: string): void {
    this.leagueInfoService
      .getLeagueInfo(apiUrl)
      .subscribe(
        (leagueInfoResponse) => (
          (this.leagueInfo.settings.name = leagueInfoResponse.settings.name),
          (this.leagueInfo.teams = leagueInfoResponse.teams)
        )
      );
  }

  public teamName(location: string, nickname: string): string {
    return location + ' ' + nickname;
  }

  ngOnInit(): void {
    this.getLeagueInfo("http://localhost:3000/league");
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { TeamDetail } from '../../dto/team-detail';
import { TeamDetailService } from '../team-detail.service';

@Component({
  selector: 'app-team-ranking',
  templateUrl: './team-ranking.component.html',
  styleUrls: ['./team-ranking.component.scss'],
})
export class TeamRankingComponent implements OnInit {
  @Input() teamId!: number;

  constructor(private readonly teamDetailService: TeamDetailService) {}

  public teamDetail: TeamDetail = {
    teams: [
      {
        currentProjectedRank: 0,
        draftDayProjectedRank: 0,
        divisionId: 0,
        draftStrategy: { keeperPlayerIds: [] },
        logo: '',
        abbrev: '',
        id: 0,
        isActive: false,
        location: '',
        logoType: '',
        nickname: '',
        owners: [''],
        playoffSeed: 0,
        points: 0,
        pointsAdjusted: 0,
        pointsDelta: 0,
        primaryOwner: '',
        rankCalculatedFinal: 0,
        rankFinal: 0,
        record: {
          away: {
            gamesBack: 0,
            losses: 0,
            percentage: 0,
            pointsAgainst: 0,
            pointsFor: 0,
            streakLength: 0,
            streakType: '',
            ties: 0,
            wins: 0,
          },
          division: {
            gamesBack: 0,
            losses: 0,
            percentage: 0,
            pointsAgainst: 0,
            pointsFor: 0,
            streakLength: 0,
            streakType: '',
            ties: 0,
            wins: 0,
          },
          home: {
            gamesBack: 0,
            losses: 0,
            percentage: 0,
            pointsAgainst: 0,
            pointsFor: 0,
            streakLength: 0,
            streakType: '',
            ties: 0,
            wins: 0,
          },
          overall: {
            gamesBack: 0,
            losses: 0,
            percentage: 0,
            pointsAgainst: 0,
            pointsFor: 0,
            streakLength: 0,
            streakType: '',
            ties: 0,
            wins: 0,
          },
        },
        tradeBlock: {},
        transactionCounter: {
          acquisitionBudgetSpent: 0,
          matchupAcquisitionTotalnumber: {},
          misc: 0,
          paid: 0,
          teamCharges: 0,
          acquisitions: 0,
          drops: 0,
          moveToActive: 0,
          moveToIR: 0,
          trades: 0,
        },
        valuesByStat: {},
        waiverRank: 0,
      },
    ],
  };

  public getTeamDetail(apiUrl: string): void {
    this.teamDetailService
      .getTeamDetail(apiUrl)
      .subscribe(
        (teamDetailResponse) => (this.teamDetail = teamDetailResponse)
      );
  }

  ngOnInit(): void {
    this.getTeamDetail('http://localhost:3000/team-detail');
  }
}

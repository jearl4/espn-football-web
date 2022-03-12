import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { TeamDetail } from '../dto/team-detail';

@Injectable({
  providedIn: 'root'
})
export class TeamDetailService {

  constructor(private http: HttpClient) {}

  private teamDetailUrl = 'http://localhost:3000/team-detail';

  getTeamDetail(apiUrl: string): Observable<TeamDetail> {
    return this.http
      .get<TeamDetail>(this.teamDetailUrl)
      .pipe(tap((_) => console.log('team detail call made')));
  }
}

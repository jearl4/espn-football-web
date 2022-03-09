import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { leagueInfo } from './dto/league-info';

@Injectable({
  providedIn: 'root',
})
export class LeagueInfoService {
  constructor(private http: HttpClient) {}

  private leagueInfoUrl = 'http://localhost:3000/league';

  getLeagueInfo(apiUrl: string): Observable<leagueInfo> {
    return this.http
      .get<leagueInfo>(this.leagueInfoUrl)
      .pipe(tap((_) => console.log('League call made')));
  }
}

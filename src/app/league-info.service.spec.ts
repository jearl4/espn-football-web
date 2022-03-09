import { TestBed } from '@angular/core/testing';

import { LeagueInfoService } from './league-info.service';

describe('LeagueInfoService', () => {
  let service: LeagueInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeagueInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

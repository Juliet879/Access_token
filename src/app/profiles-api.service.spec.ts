import { TestBed } from '@angular/core/testing';

import { GithubService } from './profiles-api.service';

describe('ProfilesAPIService', () => {
  let service: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

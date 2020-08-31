import { TestBed } from '@angular/core/testing';

import { ProfilesAPIService } from './profiles-api.service';

describe('ProfilesAPIService', () => {
  let service: ProfilesAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilesAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

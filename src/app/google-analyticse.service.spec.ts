import { TestBed } from '@angular/core/testing';

import { GoogleAnalyticseService } from './google-analyticse.service';

describe('GoogleAnalyticseService', () => {
  let service: GoogleAnalyticseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleAnalyticseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

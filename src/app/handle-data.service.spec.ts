import { TestBed } from '@angular/core/testing';

import { HandleDataService } from './handle-data.service';

describe('HandleDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HandleDataService = TestBed.get(HandleDataService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FamilyServiceService } from './family-service.service';

describe('FamilyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FamilyServiceService = TestBed.get(FamilyServiceService);
    expect(service).toBeTruthy();
  });
});

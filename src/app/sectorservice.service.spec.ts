import { TestBed } from '@angular/core/testing';

import { SectorserviceService } from './sectorservice.service';

describe('SectorserviceService', () => {
  let service: SectorserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectorserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CompanyallService } from './companyall.service';

describe('CompanyallService', () => {
  let service: CompanyallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

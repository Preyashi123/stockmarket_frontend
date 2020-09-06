import { TestBed } from '@angular/core/testing';

import { GetonecompanyService } from './getonecompany.service';

describe('GetonecompanyService', () => {
  let service: GetonecompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetonecompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GetcompanyService } from './getcompany.service';

describe('GetcompanyService', () => {
  let service: GetcompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

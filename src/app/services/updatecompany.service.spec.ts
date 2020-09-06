import { TestBed } from '@angular/core/testing';

import { UpdatecompanyService } from './updatecompany.service';

describe('UpdatecompanyService', () => {
  let service: UpdatecompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatecompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

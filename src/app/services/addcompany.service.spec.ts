import { TestBed } from '@angular/core/testing';

import { AddcompanyService } from './addcompany.service';

describe('AddcompanyService', () => {
  let service: AddcompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

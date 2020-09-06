import { TestBed } from '@angular/core/testing';

import { DeletecompanyService } from './deletecompany.service';

describe('DeletecompanyService', () => {
  let service: DeletecompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletecompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

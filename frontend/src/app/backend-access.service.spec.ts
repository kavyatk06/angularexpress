import { TestBed } from '@angular/core/testing';

import { BackendaccessService } from './backend-access.service';

describe('BackendAccessService', () => {
  let service: BackendaccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendaccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

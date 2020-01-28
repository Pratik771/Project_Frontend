import { TestBed, inject } from '@angular/core/testing';

import { RTOService } from './rto.service';

describe('RTOService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RTOService]
    });
  });

  it('should be created', inject([RTOService], (service: RTOService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { PorjectDataService } from './porject-data.service';

describe('PorjectDataService', () => {
  let service: PorjectDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorjectDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

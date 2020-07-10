import { TestBed } from '@angular/core/testing';

import { CatListServiceService } from './cat-list-service.service';

describe('CatListServiceService', () => {
  let service: CatListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

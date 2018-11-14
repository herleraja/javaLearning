import { TestBed } from '@angular/core/testing';

import { GenericUtilService } from './generic-util.service';

describe('GenericUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenericUtilService = TestBed.get(GenericUtilService);
    expect(service).toBeTruthy();
  });
});

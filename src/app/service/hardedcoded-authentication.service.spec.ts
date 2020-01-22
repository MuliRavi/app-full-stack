import { TestBed } from '@angular/core/testing';

import { HardedcodedAuthenticationService } from './hardedcoded-authentication.service';

describe('HardedcodedAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardedcodedAuthenticationService = TestBed.get(HardedcodedAuthenticationService);
    expect(service).toBeTruthy();
  });
});

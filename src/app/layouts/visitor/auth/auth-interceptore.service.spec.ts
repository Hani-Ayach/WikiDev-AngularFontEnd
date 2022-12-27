import { TestBed } from '@angular/core/testing';

import { AuthInterceptoreService } from './auth-interceptore.service';

describe('AuthInterceptoreService', () => {
  let service: AuthInterceptoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthInterceptoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

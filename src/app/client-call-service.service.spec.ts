import { TestBed } from '@angular/core/testing';

import { ClientCallServiceService } from './client-call-service.service';

describe('ClientCallServiceService', () => {
  let service: ClientCallServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientCallServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { UserDataServerService } from './user-data-server.service';

describe('UserDataServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDataServerService]
    });
  });

  it('should be created', inject([UserDataServerService], (service: UserDataServerService) => {
    expect(service).toBeTruthy();
  }));
});

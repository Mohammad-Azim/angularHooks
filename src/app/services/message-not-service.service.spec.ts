import { TestBed } from '@angular/core/testing';

import { MessageNotServiceService } from './message-not-service.service';

describe('MessageNotServiceService', () => {
  let service: MessageNotServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageNotServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

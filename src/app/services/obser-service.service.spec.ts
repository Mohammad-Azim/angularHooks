import { TestBed } from '@angular/core/testing';
import { ObserServiceService } from './obser-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ObserServiceService', () => {
  let service: ObserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(ObserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

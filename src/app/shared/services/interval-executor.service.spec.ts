import { TestBed } from '@angular/core/testing';

import { IntervalExecutorService } from './interval-executor.service';

describe('IntervalExecutorService', () => {
  let service: IntervalExecutorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntervalExecutorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

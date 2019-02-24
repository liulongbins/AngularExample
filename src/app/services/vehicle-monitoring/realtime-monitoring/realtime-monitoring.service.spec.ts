import { TestBed } from '@angular/core/testing';

import { RealtimeMonitoringService } from './realtime-monitoring.service';

describe('RealtimeMonitoringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealtimeMonitoringService = TestBed.get(RealtimeMonitoringService);
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { AssignAppointmentService } from './assign-appointment.service';

describe('AssignAppointmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssignAppointmentService]
    });
  });

  it('should be created', inject([AssignAppointmentService], (service: AssignAppointmentService) => {
    expect(service).toBeTruthy();
  }));
});

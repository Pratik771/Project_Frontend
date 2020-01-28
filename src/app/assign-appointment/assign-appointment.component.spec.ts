import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignAppointmentComponent } from './assign-appointment.component';

describe('AssignAppointmentComponent', () => {
  let component: AssignAppointmentComponent;
  let fixture: ComponentFixture<AssignAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

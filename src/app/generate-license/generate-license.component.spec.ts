import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateLicenseComponent } from './generate-license.component';

describe('GenerateLicenseComponent', () => {
  let component: GenerateLicenseComponent;
  let fixture: ComponentFixture<GenerateLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLicenseComponent } from './my-license.component';

describe('MyLicenseComponent', () => {
  let component: MyLicenseComponent;
  let fixture: ComponentFixture<MyLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

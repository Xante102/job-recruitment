import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppicantRegistrationComponent } from './appicant-registration.component';

describe('AppicantRegistrationComponent', () => {
  let component: AppicantRegistrationComponent;
  let fixture: ComponentFixture<AppicantRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppicantRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppicantRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

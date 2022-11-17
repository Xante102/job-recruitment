import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGradientComponent } from './header-gradient.component';

describe('HeaderGradientComponent', () => {
  let component: HeaderGradientComponent;
  let fixture: ComponentFixture<HeaderGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderGradientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

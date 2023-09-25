import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedLogoComponent } from './animated-logo.component';

describe('AnimatedLogoComponent', () => {
  let component: AnimatedLogoComponent;
  let fixture: ComponentFixture<AnimatedLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimatedLogoComponent]
    });
    fixture = TestBed.createComponent(AnimatedLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
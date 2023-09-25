import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCardFrontComponent } from './business-card-front.component';

describe('BusinessCardFrontComponent', () => {
  let component: BusinessCardFrontComponent;
  let fixture: ComponentFixture<BusinessCardFrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessCardFrontComponent]
    });
    fixture = TestBed.createComponent(BusinessCardFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

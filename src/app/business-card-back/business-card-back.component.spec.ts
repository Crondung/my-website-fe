import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCardBackComponent } from './business-card-back.component';

describe('BusinessCardBackComponent', () => {
  let component: BusinessCardBackComponent;
  let fixture: ComponentFixture<BusinessCardBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessCardBackComponent]
    });
    fixture = TestBed.createComponent(BusinessCardBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialRatesEditButtonComponent } from './special-rates-edit-button.component';

describe('SpecialRatesEditButtonComponent', () => {
  let component: SpecialRatesEditButtonComponent;
  let fixture: ComponentFixture<SpecialRatesEditButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialRatesEditButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialRatesEditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

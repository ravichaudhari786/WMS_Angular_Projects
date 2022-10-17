import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialRatesComponent } from './special-rates.component';

describe('SpecialRatesComponent', () => {
  let component: SpecialRatesComponent;
  let fixture: ComponentFixture<SpecialRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownGridSpecialRatesComponent } from './dropdown-grid-special-rates.component';

describe('DropdownGridSpecialRatesComponent', () => {
  let component: DropdownGridSpecialRatesComponent;
  let fixture: ComponentFixture<DropdownGridSpecialRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownGridSpecialRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownGridSpecialRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

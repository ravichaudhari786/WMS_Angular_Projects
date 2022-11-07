import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownButtonRatelistComponent } from './dropdown-button-ratelist.component';

describe('DropdownButtonRatelistComponent', () => {
  let component: DropdownButtonRatelistComponent;
  let fixture: ComponentFixture<DropdownButtonRatelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownButtonRatelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownButtonRatelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

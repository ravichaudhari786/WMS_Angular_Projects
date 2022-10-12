import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftingeditButtonComponent } from './shiftingedit-button.component';

describe('ShiftingeditButtonComponent', () => {
  let component: ShiftingeditButtonComponent;
  let fixture: ComponentFixture<ShiftingeditButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftingeditButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftingeditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

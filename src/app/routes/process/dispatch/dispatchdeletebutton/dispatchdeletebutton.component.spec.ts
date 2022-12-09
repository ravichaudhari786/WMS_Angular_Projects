import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchdeletebuttonComponent } from './dispatchdeletebutton.component';

describe('DispatchdeletebuttonComponent', () => {
  let component: DispatchdeletebuttonComponent;
  let fixture: ComponentFixture<DispatchdeletebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispatchdeletebuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchdeletebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftingComponent } from './shifting.component';

describe('ShiftingComponent', () => {
  let component: ShiftingComponent;
  let fixture: ComponentFixture<ShiftingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

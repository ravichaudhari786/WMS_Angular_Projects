import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountmastereditbuttonComponent } from './countmastereditbutton.component';

describe('CountmastereditbuttonComponent', () => {
  let component: CountmastereditbuttonComponent;
  let fixture: ComponentFixture<CountmastereditbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountmastereditbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountmastereditbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

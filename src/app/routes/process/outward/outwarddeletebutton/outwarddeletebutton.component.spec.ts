import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwarddeletebuttonComponent } from './outwarddeletebutton.component';

describe('OutwarddeletebuttonComponent', () => {
  let component: OutwarddeletebuttonComponent;
  let fixture: ComponentFixture<OutwarddeletebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutwarddeletebuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwarddeletebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

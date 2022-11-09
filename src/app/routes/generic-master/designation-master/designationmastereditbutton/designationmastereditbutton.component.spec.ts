import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationmastereditbuttonComponent } from './designationmastereditbutton.component';

describe('DesignationmastereditbuttonComponent', () => {
  let component: DesignationmastereditbuttonComponent;
  let fixture: ComponentFixture<DesignationmastereditbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignationmastereditbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignationmastereditbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

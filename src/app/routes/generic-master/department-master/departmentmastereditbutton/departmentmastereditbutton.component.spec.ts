import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentmastereditbuttonComponent } from './departmentmastereditbutton.component';

describe('DepartmentmastereditbuttonComponent', () => {
  let component: DepartmentmastereditbuttonComponent;
  let fixture: ComponentFixture<DepartmentmastereditbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentmastereditbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentmastereditbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

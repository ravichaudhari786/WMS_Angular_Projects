import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercomapnyComponent } from './usercomapny.component';

describe('UsercomapnyComponent', () => {
  let component: UsercomapnyComponent;
  let fixture: ComponentFixture<UsercomapnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercomapnyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercomapnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

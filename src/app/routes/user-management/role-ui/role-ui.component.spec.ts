import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleUiComponent } from './role-ui.component';

describe('RoleUiComponent', () => {
  let component: RoleUiComponent;
  let fixture: ComponentFixture<RoleUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockMasterEditButtonComponent } from './dock-master-edit-button.component';

describe('DockMasterEditButtonComponent', () => {
  let component: DockMasterEditButtonComponent;
  let fixture: ComponentFixture<DockMasterEditButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockMasterEditButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DockMasterEditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

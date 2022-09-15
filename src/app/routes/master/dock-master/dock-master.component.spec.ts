import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockMasterComponent } from './dock-master.component';

describe('DockMasterComponent', () => {
  let component: DockMasterComponent;
  let fixture: ComponentFixture<DockMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DockMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

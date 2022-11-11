import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseEditButtonComponent } from './warehouse-edit-button.component';

describe('WarehouseEditButtonComponent', () => {
  let component: WarehouseEditButtonComponent;
  let fixture: ComponentFixture<WarehouseEditButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseEditButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseEditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

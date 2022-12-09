import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryorderactionButtonsComponent } from './deliveryorderaction-buttons.component';

describe('DeliveryorderactionButtonsComponent', () => {
  let component: DeliveryorderactionButtonsComponent;
  let fixture: ComponentFixture<DeliveryorderactionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryorderactionButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryorderactionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopDeliveryComponent } from './stop-delivery.component';

describe('StopDeliveryComponent', () => {
  let component: StopDeliveryComponent;
  let fixture: ComponentFixture<StopDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StopDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

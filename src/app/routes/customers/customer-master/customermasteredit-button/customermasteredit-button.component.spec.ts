import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomermastereditButtonComponent } from './customermasteredit-button.component';

describe('CustomermastereditButtonComponent', () => {
  let component: CustomermastereditButtonComponent;
  let fixture: ComponentFixture<CustomermastereditButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomermastereditButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomermastereditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeruserEditButtonComponent } from './customeruser-edit-button.component';

describe('CustomeruserEditButtonComponent', () => {
  let component: CustomeruserEditButtonComponent;
  let fixture: ComponentFixture<CustomeruserEditButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomeruserEditButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeruserEditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

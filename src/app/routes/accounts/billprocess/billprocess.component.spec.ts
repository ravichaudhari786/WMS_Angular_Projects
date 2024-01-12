import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillprocessComponent } from './billprocess.component';

describe('BillprocessComponent', () => {
  let component: BillprocessComponent;
  let fixture: ComponentFixture<BillprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillprocessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

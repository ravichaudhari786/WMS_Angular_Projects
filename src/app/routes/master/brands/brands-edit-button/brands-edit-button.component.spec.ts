import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsEditButtonComponent } from './brands-edit-button.component';

describe('BrandsEditButtonComponent', () => {
  let component: BrandsEditButtonComponent;
  let fixture: ComponentFixture<BrandsEditButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsEditButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsEditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

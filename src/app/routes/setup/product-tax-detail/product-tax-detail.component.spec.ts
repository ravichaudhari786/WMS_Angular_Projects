import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTaxDetailComponent } from './product-tax-detail.component';

describe('ProductTaxDetailComponent', () => {
  let component: ProductTaxDetailComponent;
  let fixture: ComponentFixture<ProductTaxDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTaxDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTaxDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

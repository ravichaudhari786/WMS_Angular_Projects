import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureCategoryEditButtonComponent } from './temperature-category-edit-button.component';

describe('TemperatureCategoryEditButtonComponent', () => {
  let component: TemperatureCategoryEditButtonComponent;
  let fixture: ComponentFixture<TemperatureCategoryEditButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureCategoryEditButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureCategoryEditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

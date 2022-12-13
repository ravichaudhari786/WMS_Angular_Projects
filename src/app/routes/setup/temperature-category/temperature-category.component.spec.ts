import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureCategoryComponent } from './temperature-category.component';

describe('TemperatureCategoryComponent', () => {
  let component: TemperatureCategoryComponent;
  let fixture: ComponentFixture<TemperatureCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

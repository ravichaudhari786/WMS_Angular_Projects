import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEditButtonComponent } from './company-edit-button.component';

describe('CompanyEditButtonComponent', () => {
  let component: CompanyEditButtonComponent;
  let fixture: ComponentFixture<CompanyEditButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyEditButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardActionButtonComponent } from './inward-action-button.component';

describe('InwardActionButtonComponent', () => {
  let component: InwardActionButtonComponent;
  let fixture: ComponentFixture<InwardActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InwardActionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

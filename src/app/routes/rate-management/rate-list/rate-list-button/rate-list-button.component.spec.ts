import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateListButtonComponent } from './rate-list-button.component';

describe('RateListButtonComponent', () => {
  let component: RateListButtonComponent;
  let fixture: ComponentFixture<RateListButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateListButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateListButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

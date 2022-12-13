import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardUpdateComponent } from './outward-update.component';

describe('OutwardUpdateComponent', () => {
  let component: OutwardUpdateComponent;
  let fixture: ComponentFixture<OutwardUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutwardUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

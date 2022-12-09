import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardUpdateComponent } from './inward-update.component';

describe('InwardUpdateComponent', () => {
  let component: InwardUpdateComponent;
  let fixture: ComponentFixture<InwardUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InwardUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

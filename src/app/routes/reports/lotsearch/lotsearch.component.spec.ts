import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotsearchComponent } from './lotsearch.component';

describe('LotsearchComponent', () => {
  let component: LotsearchComponent;
  let fixture: ComponentFixture<LotsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

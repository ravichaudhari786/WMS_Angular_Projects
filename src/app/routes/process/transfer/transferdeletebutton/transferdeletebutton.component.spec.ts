import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferdeletebuttonComponent } from './transferdeletebutton.component';

describe('TransferdeletebuttonComponent', () => {
  let component: TransferdeletebuttonComponent;
  let fixture: ComponentFixture<TransferdeletebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferdeletebuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferdeletebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

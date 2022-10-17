import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountMasterComponent } from './count-master.component';

describe('CountMasterComponent', () => {
  let component: CountMasterComponent;
  let fixture: ComponentFixture<CountMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

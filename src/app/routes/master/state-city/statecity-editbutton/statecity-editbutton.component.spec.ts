import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatecityEditbuttonComponent } from './statecity-editbutton.component';

describe('StatecityEditbuttonComponent', () => {
  let component: StatecityEditbuttonComponent;
  let fixture: ComponentFixture<StatecityEditbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatecityEditbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatecityEditbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

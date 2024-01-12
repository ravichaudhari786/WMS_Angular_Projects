import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailScheduleActionBtnComponent } from './email-schedule-action-btn.component';

describe('EmailScheduleActionBtnComponent', () => {
  let component: EmailScheduleActionBtnComponent;
  let fixture: ComponentFixture<EmailScheduleActionBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailScheduleActionBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailScheduleActionBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

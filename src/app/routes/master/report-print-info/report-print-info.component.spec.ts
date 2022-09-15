import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPrintInfoComponent } from './report-print-info.component';

describe('ReportPrintInfoComponent', () => {
  let component: ReportPrintInfoComponent;
  let fixture: ComponentFixture<ReportPrintInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPrintInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPrintInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

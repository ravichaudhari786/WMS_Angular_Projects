import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessServicesComponent } from './process-services.component';

describe('ProcessServicesComponent', () => {
  let component: ProcessServicesComponent;
  let fixture: ComponentFixture<ProcessServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

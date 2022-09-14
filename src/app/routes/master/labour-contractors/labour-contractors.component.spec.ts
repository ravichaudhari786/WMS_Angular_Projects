import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourContractorsComponent } from './labour-contractors.component';

describe('LabourContractorsComponent', () => {
  let component: LabourContractorsComponent;
  let fixture: ComponentFixture<LabourContractorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabourContractorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabourContractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

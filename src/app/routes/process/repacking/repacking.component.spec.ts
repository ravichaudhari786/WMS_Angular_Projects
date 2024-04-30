import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepackingComponent } from './repacking.component';

describe('RepackingComponent', () => {
  let component: RepackingComponent;
  let fixture: ComponentFixture<RepackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

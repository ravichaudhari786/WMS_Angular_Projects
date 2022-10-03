import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageAreaComponent } from './storage-area.component';

describe('StorageAreaComponent', () => {
  let component: StorageAreaComponent;
  let fixture: ComponentFixture<StorageAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

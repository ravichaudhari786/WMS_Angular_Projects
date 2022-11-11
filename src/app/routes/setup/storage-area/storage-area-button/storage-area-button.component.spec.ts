import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageAreaButtonComponent } from './storage-area-button.component';

describe('StorageAreaButtonComponent', () => {
  let component: StorageAreaButtonComponent;
  let fixture: ComponentFixture<StorageAreaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageAreaButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageAreaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

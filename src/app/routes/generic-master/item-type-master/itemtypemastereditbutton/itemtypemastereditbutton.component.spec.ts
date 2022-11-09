import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemtypemastereditbuttonComponent } from './itemtypemastereditbutton.component';

describe('ItemtypemastereditbuttonComponent', () => {
  let component: ItemtypemastereditbuttonComponent;
  let fixture: ComponentFixture<ItemtypemastereditbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemtypemastereditbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemtypemastereditbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


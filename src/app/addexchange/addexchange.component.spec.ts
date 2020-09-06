import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexchangeComponent } from './addexchange.component';

describe('AddexchangeComponent', () => {
  let component: AddexchangeComponent;
  let fixture: ComponentFixture<AddexchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddexchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

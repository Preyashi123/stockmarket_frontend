import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendermapComponent } from './rendermap.component';

describe('RendermapComponent', () => {
  let component: RendermapComponent;
  let fixture: ComponentFixture<RendermapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendermapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendermapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

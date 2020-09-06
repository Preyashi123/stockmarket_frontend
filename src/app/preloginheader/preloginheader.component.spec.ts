import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloginheaderComponent } from './preloginheader.component';

describe('PreloginheaderComponent', () => {
  let component: PreloginheaderComponent;
  let fixture: ComponentFixture<PreloginheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreloginheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloginheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryofuploadComponent } from './summaryofupload.component';

describe('SummaryofuploadComponent', () => {
  let component: SummaryofuploadComponent;
  let fixture: ComponentFixture<SummaryofuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryofuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryofuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

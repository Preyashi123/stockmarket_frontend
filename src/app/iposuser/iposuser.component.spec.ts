import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IposuserComponent } from './iposuser.component';

describe('IposuserComponent', () => {
  let component: IposuserComponent;
  let fixture: ComponentFixture<IposuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IposuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IposuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

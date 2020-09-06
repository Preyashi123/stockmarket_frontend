import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditipoComponent } from './editipo.component';

describe('EditipoComponent', () => {
  let component: EditipoComponent;
  let fixture: ComponentFixture<EditipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

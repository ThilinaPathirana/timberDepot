import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimberComponent } from './timber.component';

describe('TimberComponent', () => {
  let component: TimberComponent;
  let fixture: ComponentFixture<TimberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

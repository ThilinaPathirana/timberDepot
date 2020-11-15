import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScantlingOtherComponent } from './scantling-other.component';

describe('ScantlingOtherComponent', () => {
  let component: ScantlingOtherComponent;
  let fixture: ComponentFixture<ScantlingOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScantlingOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScantlingOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

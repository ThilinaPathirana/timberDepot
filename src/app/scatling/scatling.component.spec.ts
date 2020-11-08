import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatlingComponent } from './scatling.component';

describe('ScatlingComponent', () => {
  let component: ScatlingComponent;
  let fixture: ComponentFixture<ScatlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScatlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

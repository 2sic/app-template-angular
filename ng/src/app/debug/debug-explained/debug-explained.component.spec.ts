import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugExplainedComponent } from './debug-explained.component';

describe('DebugExplainedComponent', () => {
  let component: DebugExplainedComponent;
  let fixture: ComponentFixture<DebugExplainedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugExplainedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugExplainedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

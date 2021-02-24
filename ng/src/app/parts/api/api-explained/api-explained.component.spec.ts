import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ApiExplainedComponent } from './api-explained.component';

describe('ApiExplainedComponent', () => {
  let component: ApiExplainedComponent;
  let fixture: ComponentFixture<ApiExplainedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiExplainedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiExplainedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

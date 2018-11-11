import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstrunComponent } from './firstrun.component';

describe('FirstrunComponent', () => {
  let component: FirstrunComponent;
  let fixture: ComponentFixture<FirstrunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstrunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitdashboardComponent } from './initdashboard.component';

describe('InitdashboardComponent', () => {
  let component: InitdashboardComponent;
  let fixture: ComponentFixture<InitdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

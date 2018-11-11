import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitonboardingComponent } from './initonboarding.component';

describe('InitonboardingComponent', () => {
  let component: InitonboardingComponent;
  let fixture: ComponentFixture<InitonboardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitonboardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitonboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

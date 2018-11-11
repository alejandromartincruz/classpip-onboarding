import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitservicesComponent } from './initservices.component';

describe('InitservicesComponent', () => {
  let component: InitservicesComponent;
  let fixture: ComponentFixture<InitservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

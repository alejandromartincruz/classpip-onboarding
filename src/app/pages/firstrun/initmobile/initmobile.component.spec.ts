import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitmobileComponent } from './initmobile.component';

describe('InitmobileComponent', () => {
  let component: InitmobileComponent;
  let fixture: ComponentFixture<InitmobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitmobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

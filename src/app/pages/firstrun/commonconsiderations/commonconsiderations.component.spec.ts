import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonconsiderationsComponent } from './commonconsiderations.component';

describe('CommonconsiderationsComponent', () => {
  let component: CommonconsiderationsComponent;
  let fixture: ComponentFixture<CommonconsiderationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonconsiderationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonconsiderationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacosinstallComponent } from './macosinstall.component';

describe('MacosinstallComponent', () => {
  let component: MacosinstallComponent;
  let fixture: ComponentFixture<MacosinstallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacosinstallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacosinstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

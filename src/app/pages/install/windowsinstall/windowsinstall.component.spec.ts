import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsinstallComponent } from './windowsinstall.component';

describe('WindowsinstallComponent', () => {
  let component: WindowsinstallComponent;
  let fixture: ComponentFixture<WindowsinstallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowsinstallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowsinstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

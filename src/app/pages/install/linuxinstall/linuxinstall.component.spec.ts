import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxinstallComponent } from './linuxinstall.component';

describe('LinuxinstallComponent', () => {
  let component: LinuxinstallComponent;
  let fixture: ComponentFixture<LinuxinstallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinuxinstallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinuxinstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

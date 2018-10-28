import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalwarningComponent } from './legalwarning.component';

describe('LegalwarningComponent', () => {
  let component: LegalwarningComponent;
  let fixture: ComponentFixture<LegalwarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalwarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalwarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

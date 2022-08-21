import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSoft2Component } from './hard-soft2.component';

describe('HardSoft2Component', () => {
  let component: HardSoft2Component;
  let fixture: ComponentFixture<HardSoft2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardSoft2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardSoft2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

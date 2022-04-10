import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagComponent } from './imag.component';

describe('ImagComponent', () => {
  let component: ImagComponent;
  let fixture: ComponentFixture<ImagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

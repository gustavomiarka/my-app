import { TestBed } from '@angular/core/testing';

import { HabilidadesHardService } from './habilidades-hard.service';

describe('HabilidadesHardService', () => {
  let service: HabilidadesHardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabilidadesHardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

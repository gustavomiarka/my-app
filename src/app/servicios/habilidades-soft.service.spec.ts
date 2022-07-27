import { TestBed } from '@angular/core/testing';

import { HabilidadesSoftService } from './habilidades-soft.service';

describe('HabilidadesSoftService', () => {
  let service: HabilidadesSoftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabilidadesSoftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

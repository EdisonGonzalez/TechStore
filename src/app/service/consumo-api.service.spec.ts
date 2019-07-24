import { TestBed } from '@angular/core/testing';

import { ConsumoApiService } from './consumo-api.service';

describe('ConsumoApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsumoApiService = TestBed.get(ConsumoApiService);
    expect(service).toBeTruthy();
  });
});

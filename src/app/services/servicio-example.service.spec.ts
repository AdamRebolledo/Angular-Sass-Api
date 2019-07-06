import { TestBed } from '@angular/core/testing';

import { ServicioExampleService } from './servicio-example.service';

describe('ServicioExampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioExampleService = TestBed.get(ServicioExampleService);
    expect(service).toBeTruthy();
  });
});

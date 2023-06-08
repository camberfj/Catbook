import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { listaMascotasResolver } from './lista-mascotas.resolver';

describe('listaMascotasResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => listaMascotasResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});

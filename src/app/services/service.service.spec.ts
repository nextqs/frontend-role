import { TestBed } from '@angular/core/testing';
import { ServiceServices } from './services.service';
import { HttpTestingController } from '@angular/common/http/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ServiceServices', () => {
  let service: ServiceServices;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ServiceServices,
        provideHttpClient(),        
        provideHttpClientTesting()   
      ]
    });

    service = TestBed.inject(ServiceServices);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});

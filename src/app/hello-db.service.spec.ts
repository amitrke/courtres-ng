import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { HelloDBService } from './hello-db.service';
import {
  JsonpModule,
  Jsonp,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  Http
} from '@angular/http';

describe('HelloDBService', () => {

  let service: HelloDBService;
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JsonpModule],
      providers: [HelloDBService, MockBackend, BaseRequestOptions, 
        {
          provide: Jsonp,
          useFactory: (backend, options) => new Jsonp(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        },
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });

    backend = TestBed.get(MockBackend);
    service = TestBed.get(HelloDBService);
  });

  it('should be created', inject([HelloDBService], (service: HelloDBService) => {
    expect(service).toBeTruthy();
  }));
});

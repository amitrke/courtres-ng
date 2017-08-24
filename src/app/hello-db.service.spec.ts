import { TestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HelloDBService } from './hello-db.service';
import {
  JsonpModule,
  Jsonp,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  Http
} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

describe('HelloDBService', () => {

  let service: HelloDBService;
  let backend: MockBackend;
  let response: Response;

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

    const options = new ResponseOptions({status: 200, body:  {'Item': {'description': 'DB Hello World'}}});
    response = new Response(options);
  });

  it('should be created', inject([HelloDBService], (service: HelloDBService) => {
    expect(service).toBeTruthy();
  }));

  it('should return data', inject([HelloDBService], (service: HelloDBService) => {
    backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
    service.getData().do(data => {
      console.dir(data);
      expect(data.Item.description).toEqual('DB Hello World',
          'should be DB Hello World');
      })
      .toPromise();
  }));
});

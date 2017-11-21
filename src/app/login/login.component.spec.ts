import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {
    HttpModule, ResponseOptions,
    Response, RequestMethod, Http,
    BaseRequestOptions, XHRBackend
} from '@angular/http';

import { LoginComponent } from './login.component';
import { BaseService } from '../shared/base-service';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { Store } from '../shared/store';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockBackend: MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [ BaseService, MockBackend,
                BaseRequestOptions,
              {
                    provide: Http,
                    deps: [MockBackend, BaseRequestOptions],
                    useFactory:
                        (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                            return new Http(backend, defaultOptions);
                        }
                },
                Store],
      imports: [
        LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.OFF, serverLogLevel: NgxLoggerLevel.OFF})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function mockBackendFunctions(testBed: TestBed) {
     mockBackend = testBed.get(MockBackend);
     mockBackend.connections.subscribe(
       (connection: MockConnection) => {
         const isUserGet = connection.request.url &&
                               connection.request.method === RequestMethod.Get &&
                               connection.request.url.match(/\/prod\/microservice\/user/) &&
                               connection.request.url.match(/\/prod\/microservice\/user/).length === 1 ? true: false;
          if (isUserGet) {
            connection.mockRespond(new Response(
              new ResponseOptions({
                 body: [{
                  id: 26,
                  title: 'Article Title...',
                  contentRendered: '<p><b>Hi there</b></p>',
                  contentMarkdown: '*Hi there*'
                }]
              })
            ));

          }
       }
     );
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockNgxLogger {

}
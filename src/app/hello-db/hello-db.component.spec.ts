import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloDBComponent } from './hello-db.component';

describe('HelloDBComponent', () => {
  let component: HelloDBComponent;
  let fixture: ComponentFixture<HelloDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

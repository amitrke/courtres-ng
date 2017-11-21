import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacuserComponent } from './facuser.component';

describe('FacuserComponent', () => {
  let component: FacuserComponent;
  let fixture: ComponentFixture<FacuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

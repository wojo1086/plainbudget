import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbSignupComponent } from './pb-signup.component';

describe('PbSignupComponent', () => {
  let component: PbSignupComponent;
  let fixture: ComponentFixture<PbSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PbSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PbSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbLoginComponent } from './pb-login.component';

describe('PbLoginComponent', () => {
  let component: PbLoginComponent;
  let fixture: ComponentFixture<PbLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PbLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PbLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

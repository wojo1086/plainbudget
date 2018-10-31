import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbLogoComponent } from './pb-logo.component';

describe('PbLogoComponent', () => {
  let component: PbLogoComponent;
  let fixture: ComponentFixture<PbLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PbLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PbLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbHomeHeaderComponent } from './pb-home-header.component';

describe('PbHomeHeaderComponent', () => {
  let component: PbHomeHeaderComponent;
  let fixture: ComponentFixture<PbHomeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PbHomeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PbHomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

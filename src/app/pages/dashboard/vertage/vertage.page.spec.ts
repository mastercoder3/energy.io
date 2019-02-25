import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VertagePage } from './vertage.page';

describe('VertagePage', () => {
  let component: VertagePage;
  let fixture: ComponentFixture<VertagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VertagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

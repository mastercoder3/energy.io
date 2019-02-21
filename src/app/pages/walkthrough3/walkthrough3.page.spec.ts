import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Walkthrough3Page } from './walkthrough3.page';

describe('Walkthrough3Page', () => {
  let component: Walkthrough3Page;
  let fixture: ComponentFixture<Walkthrough3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Walkthrough3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Walkthrough3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

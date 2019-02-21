import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Walkthrough1Page } from './walkthrough1.page';

describe('Walkthrough1Page', () => {
  let component: Walkthrough1Page;
  let fixture: ComponentFixture<Walkthrough1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Walkthrough1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Walkthrough1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

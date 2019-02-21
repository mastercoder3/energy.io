import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Walkthrough2Page } from './walkthrough2.page';

describe('Walkthrough2Page', () => {
  let component: Walkthrough2Page;
  let fixture: ComponentFixture<Walkthrough2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Walkthrough2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Walkthrough2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

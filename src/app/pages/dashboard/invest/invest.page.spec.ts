import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestPage } from './invest.page';

describe('InvestPage', () => {
  let component: InvestPage;
  let fixture: ComponentFixture<InvestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

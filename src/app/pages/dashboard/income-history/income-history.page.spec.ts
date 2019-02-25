import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeHistoryPage } from './income-history.page';

describe('IncomeHistoryPage', () => {
  let component: IncomeHistoryPage;
  let fixture: ComponentFixture<IncomeHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeHistoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

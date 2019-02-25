import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoInternetConnectionPage } from './no-internet-connection.page';

describe('NoInternetConnectionPage', () => {
  let component: NoInternetConnectionPage;
  let fixture: ComponentFixture<NoInternetConnectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoInternetConnectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoInternetConnectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

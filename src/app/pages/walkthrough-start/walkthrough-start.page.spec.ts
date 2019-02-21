import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkthroughStartPage } from './walkthrough-start.page';

describe('WalkthroughStartPage', () => {
  let component: WalkthroughStartPage;
  let fixture: ComponentFixture<WalkthroughStartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkthroughStartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkthroughStartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

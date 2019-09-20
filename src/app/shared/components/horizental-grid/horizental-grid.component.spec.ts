/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HorizentalGridComponent } from './horizental-grid.component';

describe('HorizentalGridComponent', () => {
  let component: HorizentalGridComponent;
  let fixture: ComponentFixture<HorizentalGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizentalGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizentalGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableCartComponent } from './table-cart.component';

describe('TableCartComponent', () => {
  let component: TableCartComponent;
  let fixture: ComponentFixture<TableCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

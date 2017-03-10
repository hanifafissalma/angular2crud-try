/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TambahComponent } from './tambah.component';

describe('TambahComponent', () => {
  let component: TambahComponent;
  let fixture: ComponentFixture<TambahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

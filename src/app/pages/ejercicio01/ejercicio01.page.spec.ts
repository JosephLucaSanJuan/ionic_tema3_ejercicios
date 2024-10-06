import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio01Page } from './ejercicio01.page';

describe('Ejercicio01Page', () => {
  let component: Ejercicio01Page;
  let fixture: ComponentFixture<Ejercicio01Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ejercicio01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

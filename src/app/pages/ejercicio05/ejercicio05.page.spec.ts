import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio05Page } from './ejercicio05.page';

describe('Ejercicio05Page', () => {
  let component: Ejercicio05Page;
  let fixture: ComponentFixture<Ejercicio05Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ejercicio05Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

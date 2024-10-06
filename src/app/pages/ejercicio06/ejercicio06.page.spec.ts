import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio06Page } from './ejercicio06.page';

describe('Ejercicio06Page', () => {
  let component: Ejercicio06Page;
  let fixture: ComponentFixture<Ejercicio06Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ejercicio06Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

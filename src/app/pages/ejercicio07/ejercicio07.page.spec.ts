import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio07Page } from './ejercicio07.page';

describe('Ejercicio07Page', () => {
  let component: Ejercicio07Page;
  let fixture: ComponentFixture<Ejercicio07Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ejercicio07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

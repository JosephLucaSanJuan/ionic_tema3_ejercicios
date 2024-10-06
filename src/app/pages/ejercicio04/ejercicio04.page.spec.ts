import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio04Page } from './ejercicio04.page';

describe('Ejercicio04Page', () => {
  let component: Ejercicio04Page;
  let fixture: ComponentFixture<Ejercicio04Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ejercicio04Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

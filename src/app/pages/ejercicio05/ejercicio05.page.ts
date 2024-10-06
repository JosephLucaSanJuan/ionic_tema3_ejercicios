import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio05',
  templateUrl: './ejercicio05.page.html',
  styleUrls: ['./ejercicio05.page.scss'],
})
export class Ejercicio05Page implements OnInit {

  min:number = 0;
  max:number = 0;
  n:number = 0;

  constructor() { }

  ngOnInit() {
  }

  randomNumber(){
    this.n = (Math.random() * (this.max-this.min)) + this.min
  }
}

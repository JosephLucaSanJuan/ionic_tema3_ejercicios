import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio03',
  templateUrl: './ejercicio03.page.html',
  styleUrls: ['./ejercicio03.page.scss'],
})
export class Ejercicio03Page implements OnInit {

  number:number = 0;

  constructor() { }

  ngOnInit() {
    this.number = 0;
  }

  increaseNum(plus:number){
    this.number += plus;
  }

  decreaseNum(plus:number){
    this.number -= plus;
  }

  resetNum(){
    this.number = 0;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio01',
  templateUrl: './ejercicio01.page.html',
  styleUrls: ['./ejercicio01.page.scss'],
})
export class Ejercicio01Page implements OnInit {

  text:string = "";

  constructor() { }

  ngOnInit() {
  }

  showName(){
    this.text = "Joseph Luca San Juan Thompson"
  }

  clearName(){
    this.text = "";
  }
}

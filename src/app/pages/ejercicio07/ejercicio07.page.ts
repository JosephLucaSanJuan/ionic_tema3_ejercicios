import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio07',
  templateUrl: './ejercicio07.page.html',
  styleUrls: ['./ejercicio07.page.scss'],
})
export class Ejercicio07Page implements OnInit {
  
  private _pesetas:number = 0;
  private _euros:number = 0;
  set euros(valor:number){
    this._euros=valor;
    this._pesetas = this._euros*166.386;
  }

  get euros(){
    return this._euros;
  }

  set pesetas(valor:number){
    this._pesetas=valor;
    this._euros = this._pesetas*0.00601012
  }

  get pesetas(){
    return this._pesetas;
  }

  constructor() { }

  ngOnInit() {
  }

}

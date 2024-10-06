import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio02',
  templateUrl: './ejercicio02.page.html',
  styleUrls: ['./ejercicio02.page.scss'],
})
export class Ejercicio02Page implements OnInit {

  text:string = "";
  boton:string = "";
  funcion:string = "";

  constructor() { }

  ngOnInit() {
  }

  /**buttonClick(this.funcion){
    if (this.funcion = "showName") {
      this.funcion = "clearName()"
    } else {
      this.function = "showName()"
    }
  }**/

  showName(){
    this.text = "Joseph Luca San Juan Thompson"
    this.boton = "Limpia Pantalla"
    this.funcion = "clearName()"
  }

  clearName(){
    this.text = "";
    this.boton = "Muestra Nombre"
    this.funcion = "showName()"
  }
}

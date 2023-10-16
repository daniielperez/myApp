import { Component, OnInit } from '@angular/core';

class Animal {
  constructor(
    private nombre: string
  ) {
    console.log('animal creado')
  }

  getNombre(){
    return this.nombre
  }

  correr(){
    return (`${this.nombre}  corriendo`);
  }
}

class Perro extends Animal{
  constructor(
    nombre:string,
    private colorPelo:string
  ) {
    super(nombre)
    console.log('perro creado')
  }
  ladrar(){
    console.log('ladrando...');
  }
  correrComoPerro(){
    const res = super.correr()
    return (`${this.getNombre()}  corriendo... ${this.colorPelo}`);
  }
}
@Component({
  selector: 'app-herencia',
  templateUrl: './herencia.component.html',
  styleUrls: ['./herencia.component.css']
})
export class HerenciaComponent implements OnInit {

  public perro!: Perro; 

  ngOnInit(): void {
    this.perro = new Perro('morgan','negro')
    console.log(this.perro)
    // this.perro.correr()
    this.perro.ladrar()
  }

}

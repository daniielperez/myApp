

export class Animal {
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
  
export class Perro extends Animal{
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
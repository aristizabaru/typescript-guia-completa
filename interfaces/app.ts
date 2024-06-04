// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parámetro)
interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelear (): void;
};

const conducirBatimovil = ( auto: Auto ): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
};

const batimovil: Auto = {
  encender: false,
  velocidadMaxima: 0,
  acelear () {
    console.log( "...... gogogo!!!" );
  }
};

// Cree una interfaz con que permita utilizar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
};

const guason: Guason = {
  reir: true,
  comer: true,
  llorar: false
};

const reir = ( guason: Guason ): void => {
  if ( guason.reir ) {
    console.log( "JAJAJAJA" );
  }
};


// Cree una interfaz para la siguiente función
interface CiudadGoticaFn {
  ( ciudadanos: string[] ): number;
}

const ciudadGotica: CiudadGoticaFn = ( ciudadanos: string[] ): number => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y métodos

enum Sexo {
  masculino = 'Masculino',
  femenino = 'Femenino',
}
enum EstadoCivil {
  casado = 'Casado',
  soltero = 'Soltero',
}

interface IPersona {
  nombre: string;
  edad: number;
  sexo: Sexo;
  estadoCivil: EstadoCivil;
  imprimirBio (): void;
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripción.
*/
class Persona implements IPersona {

  constructor (
    public nombre: string,
    public edad: number,
    public sexo: Sexo,
    public estadoCivil: EstadoCivil,
  ) { }

  imprimirBio (): void {
    throw new Error( 'Method not implemented.' );
  }
}
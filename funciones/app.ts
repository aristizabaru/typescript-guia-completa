( () => {
  // Funciones Básicas
  function sumar ( a: number, b: number ): number {
    return a + b;
  }

  const contar = ( heroes: string[] ): number => {
    return heroes.length;
  };
  const superHeroes: string[] = [ "Flash", "Arrow", "Superman", "Linterna Verde" ];
  contar( superHeroes );

  //Parámetros por defecto
  const llamarBatman = ( llamar: boolean = true ): void => {
    if ( llamar ) {
      console.log( "Batiseñal activada" );
    }
  };

  llamarBatman();

  // Rest?
  const unirheroes = ( ...personas: string[] ): string => {
    return personas.join( ", " );
  };


  // Tipo función
  const noHaceNada = ( numero: number, texto: string, booleano: boolean, arreglo: string[] ): void => { };

  // Crear el tipo de función que acepte la función "noHaceNada"
  let noHaceNadaTampoco: ( n: number, t: string, b: boolean, a: string[] ) => void;
  noHaceNadaTampoco = noHaceNada;

} )();
( () => {

    // Se crea un nuevo type para poder 'reciclar' la firma
    type SuperHero = {
        name: string;
        age?: number; // parámetro opcional
        powers: string[];
        getName?: () => string; // método del objeto opcional
    };

    let flash: SuperHero = {
        name: 'Barry Allen',
        // age: 24,
        powers: [ 'Súper velocidad', 'Viajar en el tiempo' ],
        getName () {
            return this.name;
        }
    };

    let superman: SuperHero = {
        name: 'Clark Kent',
        age: 45,
        powers: [ 'Súper velocidad', 'Súper fuerza' ],
        getName () {
            return this.name;
        }
    };

    console.log( { flash } );
    console.log( { superman } );
    // Como el método es opcional se debe usar ! para decirle a Typescript que el método existe
    console.log( flash.getName!() );
    console.log( superman.getName!() );
} )();
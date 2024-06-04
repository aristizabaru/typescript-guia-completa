( () => {

    // El inconveniente de definir el tipo así es que si se quiere crear un nuevo objeto
    // con esta firma tocaría repetir el tipado
    let flash: {
        name: string;
        age?: number; // parámetro opcional
        powers: string[];
        getName?: () => string; // método del objeto opcional
    } = {
        name: 'Barry Allen',
        // age: 24,
        powers: [ 'Súper velocidad', 'Viajar en el tiempo' ],
        getName () {
            return this.name;
        }
    };

    console.log( { flash } );
    // Como el método es opcional se debe usar ! para decirle a Typescript que el método existe
    console.log( flash.getName!() );
} )();
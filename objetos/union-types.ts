
( () => {

    // Se crea un nuevo type para poder 'reciclar' la firma
    type Hero = {
        name: string;
        age?: number; // parámetro opcional
        powers: string[];
        getName?: () => string; // método del objeto opcional
    };

    let myCustomVariable: string | number | Hero = 'Aristi';

} )();
( () => {
    const addNumbers = ( a: number, b: number ): number => a + b;
    const greet = ( name: string ): string => `Hola ${ name }`;

    let myFunction: ( a: number, b: number ) => number; // es la firma de la función

    myFunction = addNumbers;
    //! myFunction = greet; // Error por que la asignación no cumple con el tipo de la variable

} )();
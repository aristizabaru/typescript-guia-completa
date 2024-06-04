( () => {
    const fullName = ( firstName: string, lastName?: string, upper: boolean = false ): string => {
        return upper
            ? `${ firstName } ${ lastName ?? '--' }`.toLocaleUpperCase()
            : `${ firstName } ${ lastName ?? '--' }`;
    };

    const name = fullName( 'Tony', 'Stark', true );

    console.log( name );
} )();
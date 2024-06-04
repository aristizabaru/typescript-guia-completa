( () => {
    const fullName = ( firstName: string, ...argsRest: string[] ): string => {
        return `${ firstName } ${ argsRest.join( ' ' ) }`;
    };

    const name = fullName( 'Clark', 'Joseph', 'Kent' );

    console.log( name );
} )();
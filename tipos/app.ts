( () => {

  // Tipos
  const batman: string = 'Bruce';
  const superman: string = 'Clark';
  const isEmpty: boolean = false;
  const pi: number = 3.1416;
  const nullType: null = null;
  const undefinedType: undefined = undefined;
  const anyType: any = {}; // Puede ser cualquier tipo

  // Tuplas
  const parejaHeroes: string[] = [ batman, superman ];
  const villano: [ string, number, boolean ] = [ 'Lex Lutor', 5, true ];

  // Arreglos
  const aliados: string[] = [ 'Mujer Maravilla', 'Acuaman', 'San', 'Flash' ];

  //Enumeraciones
  enum Poder {
    flash = 5,
    superman = 100,
    batman = 1,
    acuaman = 0,
  }

  const fuerzaFlash: Poder = Poder.flash;
  const fuerzaSuperman: Poder = Poder.superman;
  const fuerzaBatman: Poder = Poder.batman;
  const fuerzaAcuaman: Poder = Poder.acuaman;

  // Retorno de funciones
  function activar_batiseñal (): string {
    return 'activada';
  }
  function neverFunction (): never {
    throw new Error( 'siempre arrojo excepción' );
  }

  function pedir_ayuda (): void {
    console.log( 'Auxilio!!!' );
  }

  // Aserciones de Tipo
  const poder: any = '100';
  const largoDelPoder: number = ( poder as string[] ).length; // Uso de casting
  console.log( largoDelPoder );


} )()


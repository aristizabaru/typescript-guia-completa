type HeroVehicle = {
    carroceria: string;
    modelo: string;
    antibalas: boolean;
    pasajeros: number;
    disparar?: () => void;
};
declare const batimovil: HeroVehicle;
declare const bumblebee: HeroVehicle;
type Villains = {
    nombre: string;
    edad?: number;
    mutante: boolean;
};
declare const villanos: Villains[];
type Charles = {
    poder: string;
    estatura: number;
};
type Apocalipsis = {
    lider: boolean;
    miembros: string[];
};
declare const charles: Charles;
declare const apocalipsis: Apocalipsis;
declare let mystique: (Charles | Apocalipsis);
//# sourceMappingURL=main.d.ts.map
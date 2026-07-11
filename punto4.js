/*SITP - FLOTA DE TRANSPORTE*/
class Vehiculo{
    constructor(placa, pasajeros) {
        this.placa = placa;
        this.pasajeros = pasajeros;
    }

    tarifa(){
        return 2950;
    }

    reporte(){
        return `PLACA: ${this.placa}, PASAJEROS: ${this.pasajeros}, TARIFA: ${this.tarifa()}`;
    }
}

class Alimentador extends Vehiculo{
    constructor(placa, pasajeros) {
        super(placa, pasajeros);
    }
    
    tarifa(){
        return 0;
    }
}

class BusDual extends Vehiculo{
    constructor(placa, pasajeros, esElectrico) {
        super(placa, pasajeros);
        this.esElectrico = esElectrico;
    }
    tarifa(){
        if(this.esElectrico == true){
            return 2500;
        }else{
            return 3200;
        }
    }
}

let flota = [
    new Vehiculo("LSD", 4),
    new Alimentador("RTF", 30),
    new BusDual("GTX", 80, false)
]

for(let clasevehiculo of flota){ /*For....of = para cada tipo de vehiculo del arreglo flota */
    console.log(clasevehiculo.reporte());
}
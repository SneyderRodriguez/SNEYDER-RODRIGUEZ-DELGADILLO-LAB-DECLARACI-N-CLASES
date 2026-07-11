/*NEQUI USUARIOS Y COMERCIOS*/
class UsuarioNequi{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    enviar(monto){
        if(monto > this.saldo){
            return `Saldo insuficiente`
        }else{
            this.saldo -=monto;
            return `Nombre: ${this.nombre} Saldo: ${this.saldo}`
        }
    }

}

class ComercioNequi extends UsuarioNequi{
    constructor(nombre, saldo, comision) {
        super(nombre, saldo);
        this.comision = comision;
    }

    enviar(monto){
        let valorcomision = monto*this.comision/100;
        let total = monto+valorcomision;
        return super.enviar(total);
    }

}

let usuario1 = new UsuarioNequi("Pepito", 200000);
console.log(usuario1.enviar(500000));

let comercio1 = new ComercioNequi("Pepito", 200000, 10);
console.log(comercio1.enviar(100000));
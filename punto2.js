/*🎞🎟🎫CINE COLOMBIA - BOLETAS NORMALES Y VIP*/
class Pelicula {
    constructor(titulo, duracion) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.precioBase = 15000;
    }

    precioBoleta(){
        return this.precioBase;
    }

    ficha(){
        return `Titulo: ${this.titulo}, \nDuración: ${this.duracion} minutos, \nPrecio: ${this.precioBoleta()}`
    }
}

class PeliculaVIP extends Pelicula{
    constructor(titulo, duracion, incluyecomida) {
        super(titulo, duracion);
        this.incluyecomida = incluyecomida;
    }

    precioBoleta(){
        let precio = this.precioBase + 25000;
        if(this.incluyecomida == true){
            precio += 18000;
        }
        return precio;
    }
}

let peliculanormal = new Pelicula("Avatar", 180);
console.log(peliculanormal.ficha(), "\n=================================");

let peliculaVIP = new PeliculaVIP("RED", 120, true);
console.log(peliculaVIP.ficha());
console.log(peliculaVIP.precioBoleta());

/**La clase PeliculaVIP no define ficha().
 * Aun así, al imprimir la ficha de una pelicula VIP el precio sale más alto.
 * ¿Por qué, si ficha() es la misma que heredó de peicula?
 * Porque le estamos diciendo a PeliculaVIP, que envie la información a Pelicula y se complemente
 */
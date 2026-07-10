/*CINE COLOMBIA - BOLETAS NORMALES Y VIP*/
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
        return this.precioBase + 25000;
        if(this.incluyecomida == si){
            return this.precioBase + 18000;
        }
    }
}

const peliculanormal = new Pelicula("Avatar", 180, this.precioBase);
console.log(peliculanormal.ficha());

const peliculaVIP = new Pelicula("RED", 120, this.precioBase, "si");
console.log(peliculaVIP.precioBoleta());
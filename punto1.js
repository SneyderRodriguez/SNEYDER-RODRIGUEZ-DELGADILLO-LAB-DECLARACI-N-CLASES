/*🛵RAPPI - CATALOGO DE RESTAURANTES*/
class Restaurante{
    constructor(nombre, categoria, calificacion){
        this.nombre = nombre;
        this.categoria = categoria;
        this.calificacion = calificacion;
    }

    describir(){
        return `Restaurante: ${this.nombre} \nPedido: ${this.categoria} \nCalifiación: ${this.calificacion}⭐`;
    }

    estaBienCalificado(){
        this.calificacion >= 4.5 == true;
    }
}

const pedido1 = new Restaurante ("Sr. WOK", "Wok Explosivo", 3.0);
pedido1.estaBienCalificado();
console.log(pedido1.calificacion, "\n====================================");

const pedido2 = new Restaurante ("Subway", "Turkey Breast", 4.6);
console.log(pedido2.describir());

/** El metodo estaBienCalificado() compara calificacion >=4.5
 * ¿Qué valor tiene esa comparación por sí sola, sin ponerla dentro de un if?
 * Ya nos esta diciendo que el valor de calificacion que existe la compare y diga si es verdadero o falso
 */
import { Producto } from "./producto";

export class Disco extends Producto {
    constructor(nombre, precio, capacidad, tecnologia, marca, velocidad) {
        super(nombre, precio);
        this.marca = marca;
        this.velocidad = velocidad;
        this.capacidad = capacidad;
        this.tecnologia = tecnologia;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getCapacidad() {
        return this.capacidad;
    }
    setCapacidad(capacidad) {
        this.capacidad = capacidad;
    }
    getTeconologia() {
        return this.tecnologia;
    }
    setTecnoogia(tecnologia) {
        this.tecnologia = tecnologia;
    }
    getTipo() {
        return "Disco";
    }
    toString() {
        return `${super.toString()}, Capacidad: ${this.capacidad}, Tipo: ${this.tipo}`;
    }
}
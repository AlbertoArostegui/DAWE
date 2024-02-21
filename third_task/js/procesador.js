import { Producto } from "./producto";

export class Procesador extends Producto {
    constructor(nombre, precio, nucleos, hilos, frecuencia, marca) {
        super(nombre, precio);
        this.marca = marca;
        this.nucleos = nucleos;
        this.hilos = hilos;
        this.frecuencia = frecuencia;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getNucleos() {
        return this.nucleos;
    }
    setNucleos(nucleos) {
        this.nucleos = nucleos;
    }
    getHilos() {
        return this.hilos;
    }
    setHilos(hilos) {
        this.hilos = hilos;
    }
    getFrecuencia() {
        return this.frecuencia;
    }
    setFrecuencia(frecuencia) {
        this.frecuencia = frecuencia;
    }
    getTipo() {
        return "Procesador";
    }
    toString() {
        return `${super.toString()}, Nucleos: ${this.nucleos}, Hilos: ${this.hilos}, Frecuencia: ${this.frecuencia}`;
    }
}
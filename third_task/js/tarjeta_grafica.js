import { Producto } from "./producto.js";

export class TarjetaGrafica extends Producto {
    constructor(nombre, precio, memoria, frecuencia, marca, arquitectura) {
        super(nombre, precio);
        this.marca = marca;
        this.arquitectura = arquitectura;
        this.memoria = memoria;
        this.frecuencia = frecuencia;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getMemoria() {
        return this.memoria;
    }
    setMemoria(memoria) {
        this.memoria = memoria;
    }
    getFrecuencia() {
        return this.frecuencia;
    }
    setFrecuencia(frecuencia) {
        this.frecuencia = frecuencia;
    }
    setArquitectura(arquitectura) {
        //No tendria mucho sentido cambiar la arquitectura de una tarjeta grafica, ya que es algo hardcodeado desde su creacion
        this.arquitectura = arquitectura;
    }
    getArquitectura() {
        return this.arquitectura;
    }
    getTipo() {
        return "Tarjetas Gráficas";
    }
    toString() {
        return `${super.toString()}, Memoria: ${this.memoria}, Frecuencia: ${this.frecuencia}`;
    }
}
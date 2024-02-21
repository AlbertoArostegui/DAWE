import { Procesador } from './procesador.js';
import { Disco } from './disco.js';
import { TarjetaGrafica } from './tarjeta_grafica.js';


var procesador1 = new Procesador("Ryzen 5 3600", 200, 6, 12, "3800", "AMD")
var procesador2 = new Procesador("Ryzen 7 3700X", 300, 8, 16, "4200", "AMD")
var procesador3 = new Procesador("Core i5 10400", 200, 6, 12, "2900", "Intel")

var disco1 = new Disco("WD Blue SN550", 50, 1000, "SSD", "Western Digital", "3500")
var disco2 = new Disco("Samsung 970 EVO", 100, 1000, "SSD", "Samsung", "3500")
var disco3 = new Disco("WD Blue", 40, 1000, "HDD", "Western Digital", "120")
var disco4 = new Disco("Seagate Barracuda", 40, 1000, "HDD", "Seagate", "150")
var disco5 = new Disco("Kingston A2000", 50, 1000, "SSD", "Kingston", "3500")

var tarjeta1 = new TarjetaGrafica("GTX 1660", 300, 6, 1500, "Nvidia", "Turing")
var tarjeta2 = new TarjetaGrafica("RX 570", 200, 4, 1200, "AMD", "Navi")
var tarjeta3 = new TarjetaGrafica("RTX 2060", 400, 6, 1500, "Nvidia", "Turing")

export let lista_tipos = [procesador1.getTipo(), disco1.getTipo(), tarjeta1.getTipo()]

let lista_procesadores = [procesador1, procesador2, procesador3]
let lista_discos = [disco1, disco2, disco3, disco4, disco5] 
let lista_tarjetas = [tarjeta1, tarjeta2, tarjeta3]
export let lista_productos = [lista_procesadores, lista_discos, lista_tarjetas]



import { lista_tipos, lista_productos } from "./tienda.js";
import { Procesador } from "./procesador.js";	
import { Disco } from "./disco.js";
import { TarjetaGrafica } from "./tarjeta_grafica.js";

window.onload = () => {
    function mostrarProductos(producto) {
        var template = `
            <div style="border: 1px solid black; margin: 10px;">
                <div style="font-size: 20px; font-weight: bold;">${producto.nombre}</div>
                <p><span style="font-weight: bold;">Marca:</span> ${producto.marca}</p>
                <p><span style="font-weight: bold;">Precio:</span> ${producto.precio}€</p>
        `;
        if (producto instanceof Procesador) {
            template += `
                <p><span style="font-weight: bold;">Nucleos:</span> ${producto.nucleos}</p>
                <p><span style="font-weight: bold;">Hilos:</span> ${producto.hilos}</p>
                <p><span style="font-weight: bold;">Frecuencia:</span> ${producto.frecuencia} MHz</p>
            `;
        }

        if (producto instanceof Disco) {
            template += `
                <p><span style="font-weight: bold;">Tecnologia:</span> ${producto.tecnologia}</p>
                <p><span style="font-weight: bold;">Capacidad:</span> ${producto.capacidad} GB</p>
                <p><span style="font-weight: bold;">Velocidad:</span> ${producto.velocidad} MB/s</p>
            `;
        }
       
        if (producto instanceof TarjetaGrafica) {
            template += `
                <p><span style="font-weight: bold;">Memoria:</span> ${producto.memoria} GB</p>
                <p><span style="font-weight: bold;">Frecuencia:</span> ${producto.frecuencia} MHz</p>
                <p><span style="font-weight: bold;">Arquitectura:</span> ${producto.arquitectura}</p>
            `;
        }

        template += `</div>`;

        return template;
    }

    var proces = document.getElementById("Procesadores");
    proces.innerHTML = `<h2 style="">${lista_tipos[0]}</h2>`;
    for (let i = 0; i < lista_productos[0].length; i++) {
        proces.innerHTML += mostrarProductos(lista_productos[0][i]);
    }

    var discos = document.getElementById("Discos");
    discos.innerHTML = `<h2>${lista_tipos[1]}</h2>`;
    for (let i = 0; i < lista_productos[1].length; i++) {
        discos.innerHTML += mostrarProductos(lista_productos[1][i]);
    }

    var tarjetas = document.getElementById("TarjetasGráficas");
    tarjetas.innerHTML = `<h2>${lista_tipos[2]}</h2>`;
    for (let i = 0; i < lista_productos[2].length; i++) {
        tarjetas.innerHTML += mostrarProductos(lista_productos[2][i]);
    }
}
var vehiculos = [
    vehiculo1 = {
        "Marca": "Peugeot",
        "Modelo": 206,
        "Puertas": 4,
        "Cilindrada": "",
        "Precio": 200000.00
    },
    vehiculo2 = {
        "Marca": "Honda",
        "Modelo": "Titan",
        "Puertas": "",
        "Cilindrada": "125c",
        "Precio": 60000.00
    },
    vehiculo3 = {
        "Marca": "Peugeot",
        "Modelo": 208,
        "Puertas": 5,
        "Cilindrada": "",
        "Precio": 250000.50
    },
    vehiculo4 = {
        "Marca": "Yamaha",
        "Modelo": "YBR",
        "Puertas": "",
        "Cilindrada": "160c",
        "Precio": 80500.50
    }
];

const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 2
})

let precioMax = 0;
let precioMin = 1000000;
let masCaro = "";
let masBarato = "";
let contienenY = "";

function mapeo(array) {
    array.map((vehiculo) => {
        if (vehiculo.Precio > precioMax) {
            precioMax = vehiculo.Precio;
            masCaro = vehiculo.Marca + " " + vehiculo.Modelo;
        }
        if (vehiculo.Precio < precioMin) {
            precioMin = vehiculo.Precio;
            masBarato = vehiculo.Marca + " " + vehiculo.Modelo;
        }
        if (typeof vehiculo.Modelo === "string") {
            if (vehiculo.Modelo.toUpperCase().includes('Y')) { contienenY = vehiculo.Marca + " " + vehiculo.Modelo + " " + vehiculo.Precio; }
        }
        if (vehiculo.Puertas != "") return console.log("Marca: " + vehiculo.Marca + " // " + "Modelo: " + vehiculo.Modelo + " // " + "Puertas: " + vehiculo.Puertas + " // " + "Precio: " + formatterPeso.format(vehiculo.Precio))
        else return console.log("Marca: " + vehiculo.Marca + " // " + "Modelo: " + vehiculo.Modelo + " // " + "Cilindrada: " + vehiculo.Cilindrada + " // " + "Precio: " + formatterPeso.format(vehiculo.Precio))
    })
}

let ordenados = vehiculos.sort(function(a, b) {
    return b.Precio - a.Precio;
});

function listar(array) {
    array.forEach(function(vehiculo) { return console.log(vehiculo.Marca + " " + vehiculo.Modelo) });
}
mapeo(vehiculos);
console.log("Vehículo más caro: " + masCaro);
console.log("Vehículo más barato: " + masBarato);
console.log("Vehículo que contiene en el modelo la letra ‘Y’: " + contienenY);
console.log("Vehículos ordenados por precio de mayor a menor: ")
listar(ordenados);
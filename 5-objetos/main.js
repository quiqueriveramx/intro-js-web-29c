const yo = { 
    nombre: "Diego",
    apellido: "Lechuga",
    edad: 2023-2003,
    pasatiempos: ["ir al gym", "jugar videojuegos"],
    saldo: 300,
    mascota: {
        nombreMascota: "Tigger"
    },
    retiro: function retiro(saldo, cantidadRetiro) {
        return saldo -= cantidadRetiro
    }
}

yo.mayoriaEdad = true

const {nombre, edad, mayoriaEdad, pasatiempos, mascota} = yo
const {nombreMascota} = yo.mascota

console.log(`Sin desestructuración Nombre: ${yo["nombre"]} ${yo.edad}  ${yo.mayoriaEdad}`);

console.log(`Con desestructuración Nombre: ${nombre} ${edad}  ${mayoriaEdad}`);

console.log(pasatiempos[0]);

console.log(yo.mascota.nombreMascota);

let cantidad = 100

console.log(yo.retiro(yo.saldo, cantidad));

const lista = [
    {
        nombre: "Alex Turner",
        banda: ["Arctic Monkeys"]
    },
    {
        nombre: "Julian Casablancas",
        banda: ["The Voidz", "The Strokes"]
    }
]

console.log(lista[0].banda[0]);

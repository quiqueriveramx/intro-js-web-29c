let arreglo = [];
let userInput;

while(!(userInput=="")){
    userInput = prompt("Ingresa un caracter");
    arreglo.push(userInput);
}
console.log("Introduciste esto: " + arreglo);


let i = 0
do {
    console.log(i);
    i++;
} while(i<10)

let frutas = ["Manzana", "Naranja", "Fresa", "Pera", "Uva"]

console.log(frutas.length);

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}


let array = [4,"dos", 8, "tres", 5, 9, 1, "cero"];

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
        console.log(array[i]);
    }
}

let numeros = []

for(let i = 0; i <= 10; i++){
    numeros.push(i)
}

console.log(numeros);
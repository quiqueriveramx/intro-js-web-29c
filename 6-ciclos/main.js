let arreglo = [];
let userInput;

while(!(userInput=="")){
    userInput = prompt("Ingresa un caracter");
    arreglo.push(userInput)
}
console.log("Introduciste esto: " + arreglo)
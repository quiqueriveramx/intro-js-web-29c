const titulo = document.querySelector('h1');
// const titulo2 = document.getElementsByTagName('h1');

// console.log(titulo);
// console.log(titulo2);

const checkbox = document.querySelector('#checkbox');
console.dir(checkbox);
function isRed() {
    if(checkbox.checked) {
        titulo.style.color = 'rebeccapurple';
        // background-color: blue;
        titulo.style.backgroundColor = '#D7DDE0';
    } else {
        titulo.style.color = 'goldenrod';
    }
}

const parrafos = document.querySelectorAll('p');
console.log(parrafos);
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.backgroundColor = '#B8DED9';
}
const nuevoParrafo = document.createElement('p');
const body = document.querySelector('body');
nuevoParrafo.innerText = 'Parrafo creado con JS';
body.appendChild(nuevoParrafo);

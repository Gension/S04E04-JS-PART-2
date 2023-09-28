
// getElementById
// querySelector

const btnItem = document.querySelector('.btn');

// <elementDuDOM>.addEventListener(<nomDeLeventEnChaineDeCaractere>, <leNomDeLaFonctionAExecuter>);
// btnItem.addEventListener('click', clickMe);

function clickMe() {
    // alert("Ouille !");
    let elm = document.createElement('div');
    elm.classList.add('madiv');
    elm.innerText = "pouet";
    document.body.appendChild(elm);
}

// document.querySelector('.madiv').addEventListener('click', function () {
//     alert("pouet");
// })

////////// COMPTEUR 

// Le span ou écrire le compteur
// Les 3 boutons

let spanElm = document.querySelector('#counter');
let decElm = document.querySelector('#decrease');
let incElm = document.querySelector('#increase');
let resetElm = document.querySelector('#reset');


// Ajouter un écouteur d'événement sur le bouton

let counter = 0;
function decrease() {
    spanElm.innerText = --counter;
}

function increase() {
    spanElm.innerText = ++counter;
}

function reset() {
    spanElm.innerText = counter = 0;
}

decElm.addEventListener('click', decrease);
incElm.addEventListener('click', increase);
resetElm.addEventListener('click', reset);

let numInputElm = document.querySelector('#numberInput');
let updateBtnElm = document.querySelector('#updateBtn');
console.log(typeof (numInputElm.value));

numInputElm.addEventListener('change', function () {
    console.log("event:change", numInputElm.value);
});

numInputElm.addEventListener('input', function (event) {
    console.log("event:input", event);
    console.log("event:input", numInputElm.value);
});

let updateForm = document.querySelector('#updateForm');

updateForm.addEventListener('submit', function (event) {
    console.log("event:submit", event);
    event.preventDefault(); // stop le comportement par defaut du submit

    counter += Number(numInputElm.value);
    spanElm.innerText = counter;

});

// ------------------------- DEMO ------------

let demoDiv = document.querySelector('.truc');

let demoDivBtn = document.querySelector('.truc button');

demoDiv.addEventListener('click', function () { alert('pouet')});
demoDivBtn.addEventListener('click', function (event) { 
    event.stopPropagation();
    alert('pouet du bouton')

});

console.log(spanElm, decElm, incElm, resetElm);

// EXO 
// En utilisant un formulaire, des input et un bouton submit
// Demander à l'utilisateur son nom, son age et ce qu'il aime
// Puis l'afficher dans le DOM (HTML)

// BONUS: En utilisant la "," énumérer le nom de choses qu'il aime faire.
// BONUS 2 : Utiliser un "radio" pour lui demander son genre : H/F/Autre

const startTime = performance.now();



const element = document.querySelector('#monElement');



const endTime = performance.now();



const executionTime = endTime - startTime;


console.log(`La méthode a pris ${executionTime} millisecondes.`);
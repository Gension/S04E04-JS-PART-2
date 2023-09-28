// EXO 
// En utilisant un formulaire, des input et un bouton submit
// Demander à l'utilisateur son nom, son age et ce qu'il aime
// Puis l'afficher dans le DOM (HTML)

// BONUS: En utilisant la "," énumérer le nom de choses qu'il aime faire.
// BONUS 2 : Utiliser un "radio" pour lui demander son genre : H/F/Autre

// Récupérer les élements du DOM
//  - le formulaire, les input, les paragraphes ou je veux afficher les éléments


// Mon formulaire
const formElm = document.getElementById('form');

// Mes input
const inputNameElm = document.getElementById('name');
const inputAgeElm = document.getElementById('age');
const inputLikesElm = document.getElementById('likes');

// Mes paragraphes
const pNameElm = document.getElementById('nameResult');
const pAgeElm = document.getElementById('ageResult');
const pLikesElm = document.getElementById('likesResult');

const answerHolderElm = document.querySelector('.answer');
const resetButtonElm = document.querySelector('.answer button');

console.log("formElm", formElm);
console.log("inputNameElm", inputNameElm);
console.log("inputAgeElm", inputAgeElm);
console.log("inputLikesElm", inputLikesElm);
console.log("pNameElm", pNameElm);
console.log("pAgeElm", pAgeElm);
console.log("pLikesElm", pLikesElm);

function handleSubmit(event) {
    event.preventDefault(); // Pour empecher la page de se refresh
    pNameElm.innerText = `Bonjour ${inputNameElm.value}!`;
    pAgeElm.innerText = `Tu as ${inputAgeElm.value} ans.`;
    pLikesElm.innerText = `Tu aimes : ${inputLikesElm.value} !`;

    answerHolderElm.classList.add('answer-visible');
}


formElm.addEventListener('submit', handleSubmit);

resetButtonElm.addEventListener('click', function () {
    answerHolderElm.classList.remove('answer-visible');
    inputNameElm.value = "";
    inputAgeElm.value = "";
    inputLikesElm.value = "";
});


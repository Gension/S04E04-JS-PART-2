import '../scss/style.scss';

// A récupérer l'element du DOM "Game holder"
// J'utilise querySelector pour récupérer l'élément avec la classe (.) game-holder
let gameHolder = document.querySelector('.game-holder');

// Récupérer mon template (un patron comme dans le textile)
// J'utilise le querySelector pour récupérer l'élément avec l'id (#) card-template
const cardTemplate = document.querySelector('#card-template');

// Exemple
// const tousLesDivsDeMonDocument = document.querySelectorAll('div');

// Je crée un tableau qui va contenir les cartes
let cards = [];

// J'ai besoin de 36 cartes donc je boucle 36 fois
for(let i = 0; i < 36; i++) {
    // Je clone mon template
    // importNode == cloner le template
    let clone = document.importNode(cardTemplate.content, true);

    // Je récupère dans mon clone l'élément qui contient le game-card
    let gameCardItem = clone.querySelector('.game-card');
    // Je lui ajoute une classe qui va nous permettre de l'identifier (pour le CSS)
    gameCardItem.classList.add(`game-card-${i}`);

    // Avant de les ajouter, je vais ajouter chaque carte à un tableau
    cards.push(clone);
    // Je l'ajoute à mon game holder
    // gameHolder.appendChild(clone);
}

//Une fois que j'ai mon tableau de cartes

// Je mélange mes cartes
ficherYatesShuffle(cards);

console.log(cards);

// Il ne me reste plus qu'a les ajouter au dom 
for(let card of cards) {
    gameHolder.appendChild(card);
}

function ficherYatesShuffle(array) {
    // Itérer sur mon tableau depuis le dernier element vers le premier
    for(let i = array.length - 1; i > 0; i--) {
        // Générer un nombre aleatoire entre 0 et i
        const randomIndex = Math.floor(Math.random() * (i + 1));

        //Echanger l'element à l'index i avec l'element à l'index randomIndex
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];

    }
}

// Les cartes apparaissent toujours dans le même ordre... 
// Imaginez une solution pour qu'elles apparaissent dans un ordre différent...


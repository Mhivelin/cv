// ------------------------------------------------------------------- //
// -----------Partie animation de l'affichage des textes-------------- //
// ------------------------------------------------------------------- //



function afficherTexte(element, vitesse) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/.,;:!ù%*µ$£€?&éèàç'\"(-_)=+";
    let longueur = element.innerHTML.length;
    let texte = element.innerHTML;

    // On remplace le texte par des caractères aléatoires
    for (let i = 0; i < longueur; i++) {
        element.innerHTML = element.innerHTML.replace(element.innerHTML[i], caracteres[Math.floor(Math.random() * caracteres.length)]);
    }

    // On affiche le texte lettre par lettre
    for (let i = 0; i < longueur; i++) {
        for (let j = i; j < longueur; j++) {
            setTimeout(() => {
                let nouveauTexte = texte.substr(0, j + 1);
                for (let k = j + 1; k < longueur; k++) {
                    nouveauTexte += caracteres[Math.floor(Math.random() * caracteres.length)];
                }
                element.innerHTML = nouveauTexte;
            }, vitesse * j);
        }
    }
    // ajouter .stable à l'element
    element.classList.add("stable");
}

    

    




const mesElements = document.querySelectorAll(".matrix");

mesElements.forEach(monElement => {

    afficherTexte(monElement, 50);
}
);


// ------------------------------------------------------------------- //
// -----------------Partie animation du texte survolé---------------- //
// ------------------------------------------------------------------- //


// on récupère les éléments à animer
const elements2 = document.querySelectorAll(".matrix");

elements2.forEach(element => {
    // on récupère le texte de l'élément
    const texte = element.textContent;
    // on le sépare par mot
    const mots = texte.split(" ");
    
    // on vide le contenu de l'élément
    element.textContent = "";

    // on parcourt les mots
    mots.forEach(mot => {
        // on crée un élément span pour chaque mot
        const span = document.createElement("span");
        // on lui ajoute la classe matrix
        span.classList.add("matrix");
        // on lui ajoute le mot
        span.textContent = mot + " ";
        // on ajoute le span à l'élément parent
        element.appendChild(span);
        
    });
    
});






// annimation du texte survolé
function animation(element, vitesse) {

    if (element.classList.contains("enCours")) {
        return;  
    }
    else {
        element.classList.add("enCours");
    }
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/.,;:!ù%*µ$£€?&éèàç'\"(-_)=+";
    let longueur = element.innerHTML.length;
    let texte = element.innerHTML;

    // On remplace le texte par des caractères aléatoires
    for (let i = 0; i < longueur; i++) {
        element.innerHTML = element.innerHTML.replace(element.innerHTML[i], caracteres[Math.floor(Math.random() * caracteres.length)]);
    }

    // On affiche le texte lettre par lettre
    for (let i = 0; i < longueur; i++) {
        for (let j = i; j < longueur; j++) {
            setTimeout(() => {
                let nouveauTexte = texte.substr(0, j + 1);
                for (let k = j + 1; k < longueur; k++) {
                    nouveauTexte += caracteres[Math.floor(Math.random() * caracteres.length)];
                }
                element.innerHTML = nouveauTexte;
            }, vitesse * j);
        }
    }
    // ajouter .stable à l'element
    element.classList.add("stable");

    // on enlève la classe enCours
    setTimeout(() => {
        element.classList.remove("enCours");
    }
    , vitesse * longueur);

    
}






// on detecte le survol de l'élément et on ajoute la classe instable
function survol(element) {
    element.addEventListener("mouseover", () => {
        element.classList.add("instable");
        element.classList.remove("stable");
        animation(element, 50);
    });
}

// on detecte la fin du survol de l'élément et on ajoute la classe stable
function finSurvol(element) {
    element.addEventListener("mouseout", () => {
        element.classList.add("stable");
        element.classList.remove("instable");
        
    });
}

// On récupère les éléments à animer
let elements = document.querySelectorAll(".matrix");

elements.forEach(element => {
    survol(element);
    finSurvol(element);
});






// ------------------------------------------------------------------- //







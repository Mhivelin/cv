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
}

    



    




const mesElements = document.querySelectorAll(".matrix");

mesElements.forEach(monElement => {
    afficherTexte(monElement, 50);
}
);

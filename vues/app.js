// Sélectionner toutes les divs associées dans la carte
const sections = document.querySelectorAll('.map .tl, .map .tr, .map .bl, .map .br');

// Ajouter les événements de survol pour chaque div
sections.forEach(section => {
    section.addEventListener('mouseover', () => {
        // Ajouter la classe 'active' à la div survolée
        section.classList.add('active');

        // Identifier le texte associé et ajouter la classe 'active'
        const txtClass = section.classList.contains('tl')
            ? '.txtTl'
            : section.classList.contains('tr')
            ? '.txtTr'
            : section.classList.contains('bl')
            ? '.txtBl'
            : '.txtBr';

        const txtElement = document.querySelector(txtClass);
        if (txtElement) {
            txtElement.classList.add('active');
        }
    });

    section.addEventListener('mouseout', () => {
        // Retirer la classe 'active' de la div survolée
        section.classList.remove('active');

        // Identifier le texte associé et retirer la classe 'active'
        const txtClass = section.classList.contains('tl')
            ? '.txtTl'
            : section.classList.contains('tr')
            ? '.txtTr'
            : section.classList.contains('bl')
            ? '.txtBl'
            : '.txtBr';

        const txtElement = document.querySelector(txtClass);
        if (txtElement) {
            txtElement.classList.remove('active');
        }
    });
});


// Compteurs pour chaque section
const hoverCounts = {
    tl: 0,
    tr: 0,
    bl: 0,
    br: 0
};


// Fonction qui vérifie et affiche l'alerte après 3 survols
function checkHoverCount(sectionClass) {
    hoverCounts[sectionClass]++;

    // Si le nombre de survols atteint 3, afficher l'alerte
    if (hoverCounts[sectionClass] === 4) {
        alert("Appuyez plusieurs fois sur tabulation puis entrer pour pouvoir jouer");
        hoverCounts[sectionClass] = 0; // Réinitialiser le compteur pour cette section
    }
}

// Ajouter un événement de survol à chaque section
sections.forEach(section => {
    section.addEventListener('mouseover', () => {
        // Obtenir la classe de la section (tl, tr, bl, br)
        const sectionClass = section.classList[0]; // par exemple 'tl', 'tr', etc.
        
        // Vérifier et mettre à jour le compteur de survol pour cette section
        checkHoverCount(sectionClass);
    });
});

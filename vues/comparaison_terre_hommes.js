
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.querySelector('.close-modal');

    // Ajout de l'événement de clic sur les images avec la classe "clickable"
    document.querySelectorAll('.clickable').forEach(image => {
        image.addEventListener('click', () => {
            const largeImageSrc = image.getAttribute('data-large');
            modalImage.src = largeImageSrc; // Change l'image affichée
            modal.style.display = 'block'; // Affiche le modal
        });
    });

    // Fermer le modal quand on clique sur la croix
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fermer le modal si on clique en dehors de l'image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const backgroundAudio = document.getElementById('background-audio');

    // Tente de jouer automatiquement
    const playAudio = () => {
        backgroundAudio.play().catch(error => {
            console.log('Lecture automatique bloquée. En attente d\'interaction utilisateur...');
        });
    };

    // Relance l'audio en boucle s'il est bloqué par le navigateur
    playAudio();

    // Écoute un clic pour jouer l'audio si nécessaire
    document.body.addEventListener('click', () => {
        if (backgroundAudio.paused) {
            playAudio();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const backgroundAudio = document.getElementById('background-audio');

    // Tente de jouer automatiquement
    backgroundAudio.play().catch(error => {
        console.log('Lecture automatique bloquée. Attente d’une interaction utilisateur.');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Gestion des modales
    const modalButtons = document.querySelectorAll('.modal-button');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    // Ouvrir une modale
    modalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    // Fermer une modale
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Fermer la modale en cliquant en dehors du contenu
    modals.forEach(modal => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Gestion des scores globaux
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let totalAnswered = 0;

    // Fonction pour mettre à jour les scores et afficher les popups
    function updateGlobalScore(totalQuestionsCount) {
        const scoreDisplay = document.getElementById('score');
        if (scoreDisplay) {
            scoreDisplay.textContent = `Bonnes réponses: ${correctAnswers} | Mauvaises réponses: ${incorrectAnswers}`;
        }

        // Vérifie si toutes les questions ont été répondues
        if (totalAnswered === totalQuestionsCount) {
            if (correctAnswers > 8) {
                document.getElementById('success-popup').style.display = 'block';
            } else {
                document.getElementById('fail-popup').style.display = 'block';
            }
        }
    }

    // Récupérer les questions de tous les quizzes
    const allQuestions = document.querySelectorAll('.question-container');
    const totalQuestionsCount = allQuestions.length; // Total des questions combinées

    allQuestions.forEach(question => {
        const answers = question.querySelectorAll('.answer, .option'); // Prend en compte les deux types de boutons

        answers.forEach(button => {
            button.addEventListener('click', function () {
                if (button.disabled) return;

                totalAnswered++; // Incrémente le nombre total de réponses

                // Vérifie si la réponse est correcte
                const isCorrect =
                    button.getAttribute('data-answer') === "true" ||
                    button.getAttribute('data-value') === question.getAttribute('data-answer');

                // Désactive toutes les réponses de la question
                answers.forEach(btn => btn.disabled = true);

                if (isCorrect) {
                    correctAnswers++;
                    button.style.backgroundColor = "green";
                } else {
                    incorrectAnswers++;
                    button.style.backgroundColor = "red";

                    // Affiche la bonne réponse en vert
                    answers.forEach(btn => {
                        if (
                            btn.getAttribute('data-answer') === "true" ||
                            btn.getAttribute('data-value') === question.getAttribute('data-answer')
                        ) {
                            btn.style.backgroundColor = "green";
                        }
                    });
                }

                // Mise à jour des scores et vérification des popups
                updateGlobalScore(totalQuestionsCount);
            });
        });
    });
});

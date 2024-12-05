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

    // Gestion du quiz
    let correctAnswers = 0;
    let incorrectAnswers = 0;

    const questions = document.querySelectorAll('.question-container');
    const scoreDisplay = document.getElementById('score');
    const totalQuestions = questions.length;

    questions.forEach(question => {
        const answers = question.querySelectorAll('.answer');

        answers.forEach(button => {
            button.addEventListener('click', function () {
                if (button.disabled) return;

                const isCorrect = button.getAttribute('data-answer') === "true";

                answers.forEach(btn => btn.disabled = true);

                if (isCorrect) {
                    correctAnswers++;
                    button.style.backgroundColor = "green";
                } else {
                    incorrectAnswers++;
                    button.style.backgroundColor = "red";

                    const correctButton = question.querySelector('[data-answer="true"]');
                    if (correctButton) correctButton.style.backgroundColor = "green";
                }

                scoreDisplay.textContent = `Bonnes réponses: ${correctAnswers} | Mauvaises réponses: ${incorrectAnswers}`;

                const answeredQuestions = document.querySelectorAll('.question-container .answer[disabled]').length;
                if (answeredQuestions === totalQuestions * 4) {
                    if (correctAnswers >= 4) {
                        document.getElementById('success-popup').style.display = 'block';
                    } else {
                        document.getElementById('fail-popup').style.display = 'block';
                    }
                }
            });
        });
    });
});
quizAnswerKey = {
    'question-1': 'c',
    'question-2': 'd',
    'question-3': 'a',
    'question-4': 'a',
    'question-5': 'd',
}

const submitButton = document.querySelector('#quiz-submit');
submitButton.addEventListener('click', checkQuiz)

function checkQuiz() {
    userSelections = document.querySelectorAll(`#quiz-form input[type='radio']:checked`);

    // if (!checkAllQuestionsAnswered(userSelections)) {
    //     console.log('have not answered all questions');
    //     return
    // }

    const numCorrect = checkUserAnswers(userSelections);
    const totalQuestions = Object.keys(quizAnswerKey).length;
    const score = Math.floor(numCorrect/totalQuestions*100) + "%"

    const scoreDiv = document.querySelector('#score');
    scoreDiv.textContent = score;
    scoreDiv.parentNode.style.display = 'flex';


}

function checkAllQuestionsAnswered(userSelections) {
    return (userSelections.length == 5);
}

function checkUserAnswers(userSelections) {
    let numCorrect = 0;

    userSelections.forEach((selection) => {
        if (checkAnswerIsCorrect(selection)) {
            numCorrect++;
            selection.parentNode.parentNode.parentNode.style.borderColor = '#88ff88'
            selection.parentNode.querySelector('label').style.backgroundColor = '#88ff88'
            selection.parentNode.querySelector('label').style.color = '#000000'
        } else {
            selection.parentNode.parentNode.parentNode.style.borderColor = '#f88f88'            
            selection.parentNode.querySelector('label').style.backgroundColor = '#ff8888'
            selection.parentNode.querySelector('label').style.color = '#000000'
        }
    })

    return numCorrect;
}

function checkAnswerIsCorrect(selection) {
    const question = selection.name;
    const userAnswer = selection.id.slice(-1);
    return (quizAnswerKey[question] == userAnswer);
}
quizAnswerKey = {
    'question-1': 'c',
    'question-2': 'd',
    'question-3': 'a',
    'question-4': 'a',
    'question-5': 'd',
}

function checkQuiz() {
    userSelections = document.querySelectorAll(`#quiz-form input[type='radio']:checked`);

    if (!checkAllQuestionsAnswered(userSelections)) {
        console.log('have not answered all questions');
        return
    }

    checkUserAnswers(userSelections);

}

function checkAllQuestionsAnswered(userSelections) {
    return (userSelections.length == 5);
}

function checkUserAnswers(userSelections) {
    let numCorrect = 0;
    const totalQuestions = Object.keys(quizAnswerKey).length;

    userSelections.forEach((selection) => {
        if (checkAnswerIsCorrect(selection)) {
            numCorrect++;
            // color in the label green
            // selection.parentNode.style.borderColor = '#88ff88'
            selection.parentNode.querySelector('label').style.backgroundColor = '#88ff88'
        } else {
            // color in the label red
            // selection.parentNode.style.borderColor = '#ff8888'
            selection.parentNode.querySelector('label').style.backgroundColor = '#ff8888'
        }
    })

    return numCorrect;
}

function checkAnswerIsCorrect(selection) {
    const question = selection.name;
    const userAnswer = selection.id.slice(-1);
    return (quizAnswerKey[question] == userAnswer);
}
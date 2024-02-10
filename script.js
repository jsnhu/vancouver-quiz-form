quizAnswerKey = {
    'question-1': 'c',
    'question-2': 'd',
    'question-3': 'a',
    'question-4': 'a',
    'question-5': 'd',
}

console.log("working");

function checkQuiz() {
    userSelections = document.querySelectorAll(`#quiz-form input[type='radio']:checked`);

    if (!checkAllQuestionsAnswered(userSelections)) {
        console.log('have not answered all questions');
        return
    }

    getUserAnswers(userSelections);

}

function checkAllQuestionsAnswered(userSelections) {
    return (userSelections.length == 5);
}

function getUserAnswers(userSelections) {
    userAnswers = {};

    userSelections.forEach((selection) => {
        console.log(selection.name);
        console.log(selection.id);
    })
}
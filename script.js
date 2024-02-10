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
    const userSelections = document.querySelectorAll(`#quiz-form input[type='radio']:checked`);
    const missingAnswersDiv = document.querySelector('#missing-answers');

    if (!checkAllQuestionsAnswered(userSelections)) {
        console.log('have not answered all questions');
        missingAnswersDiv.style.display = 'block';
        return
    }

    missingAnswersDiv.style.display = 'none';

    const numCorrect = checkUserAnswers(userSelections);
    const totalQuestions = Object.keys(quizAnswerKey).length;
    const score = Math.floor(numCorrect/totalQuestions*100);

    const allCorrectColour = [136, 255, 136];
    const allWrongColour = [255, 136, 136];
    const displayColour = interpolateBetweenRGBColours(allWrongColour, allCorrectColour, score/100);
    const displayColourString = getRGBStringFromArray(displayColour);

    const scoreDiv = document.querySelector('#score');
    scoreDiv.textContent = score + "%";
    scoreDiv.parentNode.style.backgroundColor = displayColourString;
    scoreDiv.parentNode.style.display = 'flex';
    


}

function getRGBStringFromArray(array) {
    return `rgb(${array[0]}, ${array[1]}, ${array[2]})`;
}
function interpolateBetweenRGBColours(beginColour, endColour, percentage) {
    const resultArray = [];
    for (i=0;i<beginColour.length;i++) {
        resultArray.push(interpolateBetween(
            beginColour[i],
            endColour[i],
            percentage
        ));
    }
    return resultArray;
}

function interpolateBetween(begin, end, percentage) {
    return begin + percentage * (end - begin);
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
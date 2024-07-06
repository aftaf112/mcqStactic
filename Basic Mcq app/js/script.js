function checkAnswer(questionName, correctAnswer) {
    const options = document.getElementsByName(questionName);
    let userAnswer;
    for (const option of options) {
        if (option.checked) {
            userAnswer = option.value;
            break;
        }
    }

    const resultElement = document.getElementById(`result-${questionName}`);
    
    if (userAnswer === undefined) {
        resultElement.textContent = 'Please select an answer.';
        resultElement.style.color = 'orange';
    } else if (userAnswer === correctAnswer) {
        resultElement.textContent = 'Correct!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Incorrect. Try again.';
        resultElement.style.color = 'red';
    }
}

// Example usage for each question
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.check-answer').forEach(button => {
        button.addEventListener('click', (event) => {
            const questionName = event.target.dataset.question;
            const correctAnswer = event.target.dataset.answer;
            checkAnswer(questionName, correctAnswer);
        });
    });
});

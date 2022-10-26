var startBtn =  document.getElementById("startBtn")
var timer = document.getElementById("timer")
var timeLeft = 60
var currentQuestionIndex = 0
var questionContainer = document.getElementById("questionContainer")
var currentChoicesIndex = 0
for (var i = 0; i < testQuestions.length; i++) {
    var response = 

}

function startQuiz() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft + " seconds left.";

        if(timeLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
    showQuestion();
}

function showQuestion() {
    var question = testQuestions[currentQuestionIndex]
    var questionText = document.createElement("p")
    var choices = testQuestions[currentChoicesIndex]
    var choicesText = document.createElement("button")
    var choicesText = document.createElement("button")
    var choicesText = document.createElement("button")
    var choicesText = document.createElement("button")
    
    questionText.textContent = question.question
    questionText.classList.add("questionText")
    questionContainer.appendChild(questionText)
    choicesText.textContent = choices.choices
    questionContainer.appendChild(choicesText)


}

var testQuestions = [
    {
        question: "What does HTML stand for?", 
        choices: [' Here Take My Lunch ', ' Hyper Text Markup Language ', ' Hired To Mow Lawns ', ' High Textured Makeup Lady '],
        answer: 'Hyper Text Markup Language',
    },
    {
        question: "this is a question", 
        choices: ['answer1', 'answer2', 'answer3', 'answer4'],
        answer: 'answer2',
    },
    {
        question: "this is a question", 
        choices: ['answer1', 'answer2', 'answer3', 'answer4'],
        answer: 'answer2',
    },
    {
        question: "this is a question", 
        choices: ['answer1', 'answer2', 'answer3', 'answer4'],
        answer: 'answer2',
    },
]


startBtn.addEventListener("click", startQuiz)
var startButton =  document.getElementById("start-btn")
var nextButton =  document.getElementById("next-btn")
var timer = document.getElementById("timer")
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById('questions')
var answerButtonsElement = document.getElementById('answer-buttons')

var shuffledQuestions, currentChoicesIndex

var timeLeft = 120
var currentQuestionIndex = 0

function startQuiz() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentChoicesIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

    var timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft + " seconds left.";

        if(timeLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.append(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}


function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


var questions = [
    {
        question: "What does HTML stand for?", 
        answers: [
            { text:' Here Take My Lunch ', correct: false},
            { text:' Hyper Text Markup Language ',  correct: true},
            { text:' Hired To Mow Lawns ', correct: false},
            { text:' Hyper Toddler Mommy Lover', correct: false}

        ]
    },
    {
        question: "What does JSON stand for?", 
        answers: [
            { text:' JavaScript Object Notation ',  correct: true},
            { text:' Joint Service Online Network ', correct: false},
            { text:' JavaScript Online Notification ', correct: false},
            { text:' Java Server Observation Number', correct: false}

        ]
    },
    {
        question: "CSS is commonly known as?", 
        answers: [
            { text:' Customer Service Support ', correct: false},
            { text:' Computer System Server ', correct: false},
            { text:' Community Support Services', correct: false},
            { text:' Cascading Style Sheet ',  correct: true}

        ]
    },
    {
        question: "Which of the following is not an HTML element?", 
        answers: [
            { text:' <div>', correct: false},
            { text:' <section> ', correct: false},
            { text:' <h7> ',  correct: true},
            { text:' <footer> ', correct: false}

        ]
    }
]
   


startButton.addEventListener("click", startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
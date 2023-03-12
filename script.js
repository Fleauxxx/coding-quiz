let questionContainer = document.getElementById("question-container")
let questionEl = document.getElementById("question")
let answersEl = document.getElementById("answers")
let timer = document.getElementById("timer")
const startBtn = document.getElementById("start-btn")
const nextBtn = document.getElementById("next-btn")
const quitBtn = document.getElementById("quit-btn")
var randomQuestion, currentIndex
var timeLeft = 60
var currentIndex = 0



// function to begin the quiz
function loadQuiz(){
    startBtn.classList.add('cover')
    randomQuestion = questions.sort(() => Math.random() - .5)
    currentIndex = 0
    questionContainer.classList.remove('cover')
    nextQuestion()
}
   
// this function calls the next question
function nextQuestion(){
    // resetContainer()
    renderQuestion(randomQuestion[currentIndex])

    
}

function renderQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        // if (answer.correct) { alert("correct");
            
        // }
        button.addEventListener('click', pickAnswer)
        answersEl.append(button)
    })
}



function resetContainer(){
    while (answersEl.firstChild) {
        answersElement.removeChild
        (answersElement.firstChild)
    }

}



function quitQuiz() {
    startBtn.classList.remove('cover')
    questionContainer.classList.add('cover')
  }




// Array of objects containing my questions and answers.
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
   


startBtn.addEventListener("click", loadQuiz)
// nextBtn.addEventListener('click', () => {
   
// })
quitBtn.addEventListener('click', quitQuiz)

nextBtn.addEventListener('click', () => {
    currentIndex++
    nextQuestion()
})
  
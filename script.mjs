let questionEl = document.getElementById('questionh2')
let a_text = document.getElementById('a_text')
let b_text = document.getElementById('b_text')
let c_text = document.getElementById('c_text')
let d_text = document.getElementById('d_text')
let submitBtn = document.getElementById('submit')
let resetBtn = document.getElementById('reset')
let previousBtn = document.getElementById('previous')
let options = document.getElementsByClassName('option')
let clearBtn = document.querySelector('#clear')
const answerEls = document.querySelectorAll(".option")
let main = document.getElementById('main')
import questions from './questions.mjs'

console.log(questions.length)

let currentQues = 0
let score = 0

function printQuiz(){
    questionEl.innerText = questions[currentQues].question
    a_text.innerHTML = questions[currentQues].optionA
    b_text.innerHTML = questions[currentQues].optionB
    c_text.innerHTML = questions[currentQues].optionC
    d_text.innerHTML = questions[currentQues].optionD
}

function checkSelect(){
    let answer = undefined

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    });
    return answer
}

function deselect(){
    answerEls.forEach((answerEl) =>{
        answerEl.checked = false
    })
}

function loadQuiz (){
    printQuiz()
    deselect()
}

function reset(){
    currentQues = 0
    printQuiz()
}

function previous(){
    currentQues = currentQues - 1
    printQuiz()
}

loadQuiz()

submitBtn.addEventListener('click', ()=>{
    const answer = checkSelect()

    if (answer) {
        if (answer === questions[currentQues].correct) {
            score++
        }

        currentQues++;
        if (currentQues < questions.length) {
            loadQuiz()
        } else {
            main.innerHTML = `<h2>You answered ${score}/${questions.length} correctly</h2>`
        }   
    }else{
        alert("Please answer the question")
    }
}
)

resetBtn.addEventListener('click', ()=>{
    if (currentQues > 0) {
        reset()
    } else {
        alert("You are already at question 1")
    }
}
)

previousBtn.addEventListener('click', ()=>{
    if (currentQues > 0) {
        previous()
    } else {
        alert("You are already at question 1")
    }
}
)

clearBtn.addEventListener('click', ()=>{
    deselect();
})
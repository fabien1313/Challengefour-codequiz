// Selectors
const myBtn = document.getElementById("myBtn");
var timerText = document.getElementById("timer-text");
var currentQuestionIndex = 0;




var arrayQuestions = [{
  question: ("____ is the process of finding erros."),
  choices: ["Compiling", "Executing", "Debugging", "Scanning"],
  answer: 'Debugging'

},

{
  question: ("What is refactoring code?"),
  choices: ['Pair', 'Deleting, developing a whole new program', 'Consolidating and improving while preserving functionality', 'Add web and third-party API'],
  answer: 'Consolidating and improving while preserving functionality'

},

{
  question: ("What is the difference between an ID and a class?"),
  choices: ['Class refers to students and ID is your identification card', 'Class can be used multiple times to apply CSS whereas ID is a unique identifier for CSS', 'Class changes the ranking in elements while ID logs the identification of the element in the console', 'Class is a fancy name for organization within the HTML file whereas ID begins a new section'],
  answer: 'Class can be used multiple times to apply CSS whereas ID is a unique identifier for CSS'
},

{
  question: ("What is the name of the statement that is used to exit or end a loop?"),
  choices: ['Close statement', 'Break statement', 'Conditional statement', 'If statement'],
  answer: 'Break statement'
}

]




function countdown() {
  var timeLeft = 100;

  var timeInterval = setInterval(function(){
    if ( timeLeft > 1) {
      timerText.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    }else if (timeLeft === 1) {
      timerText.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else {
      timerText.textContent = '';
      clearInterval(timeInterval);
    }
  }, 1000);
}

function startQuiz() {
  countdown()
  var introTextDiv = document.getElementById('intro-text');
  var buttonSectionDiv = document.getElementById('button-section');
  var quizBoxDiv = document.getElementById('quiz');
  introTextDiv.style.display = 'none';
  buttonSectionDiv.style.display = 'none';
  quizBoxDiv.style.display = 'inherit';
  currentQuestionIndex = 0;
  showQuestion(currentQuestionIndex);
  
  
}

function showQuestion(index) {
  var questionDiv = document.getElementById('question');
  questionDiv.textContent = arrayQuestions[index].question;
  var questionOne = document.getElementById('answerOne');
  questionOne.textContent = arrayQuestions[index].choices[0];
  var questionTwo = document.getElementById('answerTwo');
  questionTwo.textContent = arrayQuestions[index].choices[1];
  var questionThree = document.getElementById('answerThree');
  questionThree.textContent = arrayQuestions[index].choices[2];
  var questionFour = document.getElementById('answerFour');
  questionFour.textContent = arrayQuestions[index].choices[3];
}

function ansQuestion(choice) {
  currentQuestionIndex++
  showQuestion(currentQuestionIndex);

}










myBtn.addEventListener("click", startQuiz) 



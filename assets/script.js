// Selectors
const myBtn = document.getElementById("myBtn");
var timerText = document.getElementById("timer-text");



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
}

]







function countdown(e) {
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









myBtn.addEventListener("click", countdown) 



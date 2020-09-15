// Variables for different parts of the quiz
var quizContainer = document.querySelector("#quiz");
var gameOverDiv = document.querySelector("#gameOver");
var submitButton = document.querySelector("#generateBtn");
var timerDiv = document.querySelector(".timer");
var resultsDiv = document.querySelector(".results");
var highScoreDiv = document.querySelector("#highScore");

// Quiz questions in object array with questions and answers
var quizQuestions = [
  {
    question: "In the DOM, what does the 'click' event do?",
    answers: {
      a: "The event occurs when the user clicks on an element.",
      b: "The event occurs when the browser can start playing the media.",
      c: "The event occurs when the user double-clicks on an element.",
      d: "The event occurs when the user is pressing a key.",
    },
    correctAnswer: "a",
  },
  {
    question: "What does 'indexOf()' mean?",
    answers: {
      a:
        "Searches the array for an element, starting at the end, and returns its position.",
      b: "Searches the array for an element and returns it position.",
      c: "Sorts the elements of an array.",
      d: "Returns the primitive value of an array.",
    },
    correctAnswer: "b",
  },
  {
    question: "What is a fixed value called?",
    answers: {
      a: "Variable",
      b: "Object",
      c: "Literal",
      d: "String",
    },
    correctAnswer: "c",
  },
  {
    question: "What method is used for debugging code?",
    answers: {
      a: "document.getElementById().innerHTML",
      b: "function ()",
      c: "console.log",
      d: "variables",
    },
    correctAnswer: "c",
  },
  {
    question: "What does the 'parseInt' function do?",
    answers: {
      a: "parses the object argument to a number",
      b: "parses an argument",
      c: "parses a string and returns a floating point number",
      d: "parses a string and returns an integer",
    },
    correctAnswer: "d",
  },
  {
    question: "What is a 'Boolean'?",
    answers: {
      a: "a block of code designed to perform a particular task",
      b:
        "statement used to perform different actions based on different conditions",
      c: "function used to store multiple values in a single variable",
      d: "function to find out if an expression is true or false",
    },
    correctAnswer: "d",
  },
  {
    question: "What is a 'For Loop'?",
    answers: {
      a: "loops through a block of code a number of times",
      b: "loops through the properties of an object",
      c: "loops through the values of an iterable object",
      d: "loops through a clock of code while a specified condition is true",
    },
    correctAnswer: "a",
  },
];

var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 100;
var timerInterval;
var score = 0;
var correct;

function generateQuestions() {
  gameOverDiv.style.display = "none";
  if (currentQuestionIndex === finalQuestionIndex) {
    return showScore();
  }
  var currentQuestion = quizQuestions[currentQuestionIndex];
  questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
  buttonA.innerHTML = currentQuestion.choiceA;
  buttonB.innerHTML = currentQuestion.choiceB;
  buttonC.innerHTML = currentQuestion.choiceC;
  buttonD.innerHTML = currentQuestion.choiceD;
 }
submitButton.addEventListener("click", buildQuiz);
function showResults() {
  
}
 // show the questions
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
  var quiz = {
    draw : function () {
    // quiz.draw() : draw the quiz
  
      // Fetch the HTML quiz wrapper
      var wrapper = document.getElementById("quiz-wrap");
  
      // Loop through all the questions
      // Create all the necessary HTML elements
      for (var index in questions) {
        var number = parseInt(index) + 1; // The current question number
        var qwrap = document.createElement("div"); // A div wrapper to hold this question and options
        qwrap.classList.add("question"); // CSS class, for cosmetics
  
        // The question - <h1> header
        var question = document.createElement("h1");
        question.innerHTML = number + ") " + questions[index]['q'];
        qwrap.appendChild(question);
  
        // The options - <input> radio buttons and <label>
        for (var oindex in questions[index]['o']) {
          // The <label> tag
          var label = document.createElement("label");
          qwrap.appendChild(label);
  
          // The <option> tag
          var option = document.createElement("input");
          option.type = "radio";
          option.value = oindex;
          option.required = true;
          option.classList.add("oquiz"); // Will explain this later in function submit below
  
          // Remember that a radio button group must share the same name
          option.name = "quiz-" + number;
          label.appendChild(option);
  
          // Add the option text
          var otext = document.createTextNode(questions[index]['o'][oindex]);
          label.appendChild(otext);
        }
  
        // Finally, add this question to the main HTML quiz wrapper
        wrapper.appendChild(qwrap);
      }
  
      // Attach submit button + event handler to the quiz wrapper
      var submitbutton = document.createElement("input");
      submitbutton.type = "submit";
      wrapper.appendChild(submitbutton);
      wrapper.addEventListener("submit", quiz.submit);
    },
  
    submit : function (evt) {
    // quiz.submit() : Handle the calculations when the user submits to quiz
  
      // Stop the form from submitting
      evt.preventDefault();
      evt.stopPropagation();
  
      // Remember that we added an "oquiz" class to all the options?
      // We can easily get all the selected options this way
      var selected = document.querySelectorAll(".oquiz:checked");
  
      // Get the score
      var score = 0;
      for (var index in questions) {
        if (selected[index].value == questions[index]['a']) {
          score++;
        }
      }
  
      // We can calculate the score now
      var total = selected.length;
      var percent = score / total ;
  
      // Update and show the score
      // Instead of creating elements, we can also directly alter the inner HTML
      var html = "<h1>";
      if (percent>=0.7) {
        html += "WELL DONE!";
      } else if (percent>=0.4) {
        html += "NOT BAD!";
      } else {
        html += "TRY HARDER!";
      }
      html += "</h1>";
      html += "<div>You scored " + score + " out of " + total + ".</div>";
      document.getElementById("quiz-wrap").innerHTML = html;
    }
  };
  
  /* [INIT] */
  window.addEventListener("load", quiz.draw);

var count = 60;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("You're out of time!");
  }
}, 3000);

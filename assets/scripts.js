var start = document.querySelector('#start-quiz');
var end = document.querySelector('#end-quiz');
var scoreCount = 0;
var scoreDisplay = document.querySelector('#score-value');
var highScoreList = document.querySelector('#high-scores');
var highScores = document.querySelector('.high-score-list');
var score1 = document.querySelector('#score-1');
var score2 = document.querySelector('#score-2');
var score3 = document.querySelector('#score-3');
var score4 = document.querySelector('#score-4');
var score5 = document.querySelector('#score-5');
var question1View = document.querySelector('.question1-container');
var question2View = document.querySelector('.question2-container');
var question3View = document.querySelector('.question3-container');
var question4View = document.querySelector('.question4-container');
var question5View = document.querySelector('.question5-container');



var timerInterval; 
var secondsLeft = 60;
var timeRemaining = document.querySelector('#time-remaining');
var timeEl = document.querySelector('#timer-text');
var quizQuestion = document.querySelector('#quiz-question');
var answerButton1 = document.querySelector('#answer-1');
var answerButton2 = document.querySelector('#answer-2');
var answerButton3 = document.querySelector('#answer-3');
var answerButton4 = document.querySelector('#answer-4');
var answerButton5 = document.querySelector('#answer-5');
var answerButton6 = document.querySelector('#answer-6');
var answerButton7 = document.querySelector('#answer-7');
var answerButton8 = document.querySelector('#answer-8');
var answerButton9 = document.querySelector('#answer-9');
var answerButton10 = document.querySelector('#answer-10');
var answerButton11 = document.querySelector('#answer-11');
var answerButton12 = document.querySelector('#answer-12');
var answerButton13 = document.querySelector('#answer-13');
var answerButton14 = document.querySelector('#answer-14');
var answerButton15 = document.querySelector('#answer-15');
var answerButton16 = document.querySelector('#answer-16');
var answerButton17 = document.querySelector('#answer-17');
var answerButton18 = document.querySelector('#answer-18');
var answerButton19 = document.querySelector('#answer-19');
var answerButton20 = document.querySelector('#answer-20');
var answerTruth = document.querySelector('#correct-incorrect');


function endTimer() {
  secondsLeft = 0;
}
function correctAnswer() {
  answerTruth.style.display = "inline";
  answerTruth.textContent = "Correct! +1 point";
  scoreCount++;
  scoreDisplay.textContent = scoreCount;
}

function incorrectAnswer() {
  answerTruth.style.display = "inline";
  answerTruth.textContent = "Sorry, not correct. -5 Seconds";
  secondsLeft -= 5;
}

function question2() {
  // question1View.style.display = "none";
  question2View.style.display = "block";
  quizQuestion.textContent = "String values must be enclosed within _____ when being assigned to variables";
  answerButton1.style.display = "none";
  answerButton2.style.display = "none";
  answerButton3.style.display = "none";
  answerButton4.style.display = "none";

  answerButton5.style.display = "block";
  answerButton6.style.display = "block";
  answerButton7.style.display = "block";
  answerButton8.style.display = "block";
  
}

function question3() {
  // question1View.style.display = "none";
  question3View.style.display = "block";
  quizQuestion.textContent = "Arrays in JavaScript can be used to store _______";
  answerButton5.style.display = "none";
  answerButton6.style.display = "none";
  answerButton7.style.display = "none";
  answerButton8.style.display = "none";

  answerButton9.style.display = "block";
  answerButton10.style.display = "block";
  answerButton11.style.display = "block";
  answerButton12.style.display = "block";
  
}

function question4() {
  // question1View.style.display = "none";
  question4View.style.display = "block";
  quizQuestion.textContent = "Commonly used data types DO NOT include:";
  answerButton9.style.display = "none";
  answerButton10.style.display = "none";
  answerButton11.style.display = "none";
  answerButton12.style.display = "none";

  answerButton13.style.display = "block";
  answerButton14.style.display = "block";
  answerButton15.style.display = "block";
  answerButton16.style.display = "block";
  
}

function question5() {
  // question1View.style.display = "none";
  question5View.style.display = "block";
  quizQuestion.textContent = "How do you create a function in JavaScript?";
  answerButton13.style.display = "none";
  answerButton14.style.display = "none";
  answerButton15.style.display = "none";
  answerButton16.style.display = "none";

  answerButton17.style.display = "block";
  answerButton18.style.display = "block";
  answerButton19.style.display = "block";
  answerButton20.style.display = "block";
  
}






start.addEventListener('click', function() {
    timeRemaining.textContent = "Time Remaining: "
    timeEl.textContent = secondsLeft;
    start.style.display = "none";
    scoreDisplay.textContent = scoreCount;
    // end.style.display = "block";

    //displays answer buttons
    answerButton1.style.display = "block";
    answerButton2.style.display = "block";
    answerButton3.style.display = "block";
    answerButton4.style.display = "block";

    

    //adds answers to buttons and displays current quiz question
    quizQuestion.style.display = "inline";
    quizQuestion.textContent = "Inside which HTML element do we put the JavaScript?"
    answerButton1.textContent = "a. <js>";
    answerButton2.textContent = "b. <script>";
    answerButton3.textContent = "c. <scripting>";
    answerButton4.textContent = "d. <javascript>";

   
    
   
    // Sets interval in variable
    timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;

    

  
      if(secondsLeft === 0 || secondsLeft < 0) {
        scoreCount = 0;
        timeEl.textContent = "Time's up!";
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        start.style.display = "block";
        // end.style.display = "none";
          timeRemaining.textContent = null;
          answerButton1.style.display = "none";
          answerButton2.style.display = "none";
          answerButton3.style.display = "none";
          answerButton4.style.display = "none";
          answerButton1.textContent = null;
          answerButton2.textContent = null;
          answerButton3.textContent = null;
          answerButton4.textContent = null;
          quizQuestion.textContent = null;
          quizQuestion.style.display = "none";
          secondsLeft = 60;
          answerTruth.textContent = null;
          var playerInitials = prompt("Please enter your initials to save your score");

          if (score1.textContent == "") {
          score1.textContent = playerInitials + "  :  " + scoreCount;
          } else if (score1.textContent != "" && score2.textContent == "") {
            score2.textContent = playerInitials + "  :  " + scoreCount;
          } else if (score1.textContent != "" && score2.textContent != "" && score3.textContent == "") {
            score3.textContent = playerInitials + "  :  " + scoreCount;
          } else if (score1.textContent != "" && score2.textContent != "" && score3.textContent != "" && score4.textContent == "") {
            score4.textContent = playerInitials + "  :  " + scoreCount;
          } else if (score1.textContent != "" && score2.textContent != "" && score3.textContent != "" && score4.textContent != "" && score5.textContent == "") {
            score5.textContent = playerInitials + "  :  " + scoreCount;
          } else if (score1.textContent != "" && score2.textContent != "" && score3.textContent != "" && score4.textContent != "" && score5.textContent != "") {
            score1.textContent = playerInitials + "  :  " + scoreCount;
            score2.textContent = "";
            score3.textContent = "";
            score4.textContent = "";
            score5.textContent = "";
          }



          // if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
          //   alert("please enter a valid tag");
          // } else {
            // Creates element based on tag entered by user
            // var tag = document.createElement("p");
          
            // // Adds text content to created tag
            // tag.textContent = playerInitials + "-----" + scoreCount;
            
            // // Appends tag as child of document body
            // document.body.appendChild(tag);
            // tag.style.color = "white";
            
          //}
        

          



        
      }

      
      // end.addEventListener('click', function() {
      //   start.style.display = "block";
      //   end.style.display = "none";
      //   clearInterval(timerInterval);
      //   secondsLeft = 10;
      //   timeEl.textContent = "Quiz ended. No score saved. Please restart quiz to save scores.";
      //   timeRemaining.textContent = "";
      //   answerButton1.style.display = "none";
      //   answerButton2.style.display = "none";
      //   answerButton3.style.display = "none";
      //   answerButton4.style.display = "none";
      //   answerButton1.textContent = null;
      //   answerButton2.textContent = null;
      //   answerButton3.textContent = null;
      //   answerButton4.textContent = null;
      //   quizQuestion.textContent = null;
      //   quizQuestion.style.display = "none";
      // })

      
      
  
    }, 1000);

   
});


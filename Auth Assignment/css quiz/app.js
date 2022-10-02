var questions = [
    {
        ques: "Q1: What is the full form of CSS?",
        opt1: "Colorful Style Sheets",
        opt2: "Creative Style Sheets",
        opt3: "Computer Style Sheets",
        opt4: "Cascading Style Sheets",
        answer: "opt4"
    },
    {
        ques: "Q2: Where in an HTML document is the correct place to refer to an external style sheet?",
        opt1: "At the end of a document",
        opt2: "In the &#60; head &#62; section",
        opt3: "In middile of the web page",
        opt4: "In the &#60; body &#62; section",
        answer: "opt2"
    },
    {
        ques: "Q3: Which HTML tag is used to define an internal style sheet?",
        opt1: "&#60; css &#62;",
        opt2: "&#60; script &#62;",
        opt3: "&#60; style &#62;",
        opt4: "&#60; color &#62;",
        answer: "opt3"
    },
    {
        ques: "Q4: Which HTML attribute is used to define inline styles?",
        opt1: "styles",
        opt2: "class",
        opt3: "font",
        opt4: "style",
        answer: "opt4"
    },
    {
        ques: "Q5: Which is the correct CSS syntax?",
        opt1: "body{color: black;}",
        opt2: "{body:color = black;}",
        opt3: "body:color = black;",
        opt4: "{body-color: black;}",
        answer: "opt1"
    },
    {
        ques: "Q6: How do you insert a comment in a CSS file?",
        opt1: "'This is a comment",
        opt2: '/* This is a comment */',
        opt3: '// This is a comment',
        opt4: "// This is a comment //",
        answer: "opt2"
    },
    {
        ques: "Q7: Which property is used to change the background color?",
        opt1: "color",
        opt2: "bg2",
        opt3: 'backgroundColor',
        opt4: 'background-color',
        answer: "opt4"
    },
    {
        ques: "Q8: Which CSS property controls the text size?",
        opt1: 'font-size',
        opt2: 'font-style',
        opt3: 'text-size',
        opt4: 'text-style',
        answer: "opt1"
    },
    {
        ques: "Q9: How do you make each word in a text start with a capital letter?",
        opt1: 'text-style:capitalize',
        opt2: 'transform:capitalize',
        opt3: 'text-transform:capitalize',
        opt4: "You can't do this using css",
        answer: "opt3"
    },
    {
        ques: "Q10: Which property is used to change the font of an element?",
        opt1: 'font-style',
        opt2: 'font-family',
        opt3: 'font-weight',
        opt4: "style",
        answer: "opt1"
    },
]
var question = document.querySelector("#question")
var inp1 = document.querySelector("#inp1")
var inp2 = document.querySelector("#inp2")
var inp3 = document.querySelector("#inp3")
var inp4 = document.querySelector("#inp4")
var opt1 = document.querySelector("#opt1")
var opt2 = document.querySelector("#opt2")
var opt3 = document.querySelector("#opt3")
var opt4 = document.querySelector("#opt4")
var questionCount = 0;
var score = 0;
var bOpen = "&#60;"
var bClose = "&#62;"
var submitBtn = document.querySelector(".submit-btn")

question.innerHTML = questions[questionCount].ques;
opt1.innerHTML = questions[questionCount].opt1;
opt2.innerHTML = questions[questionCount].opt2;
opt3.innerHTML = questions[questionCount].opt3;
opt4.innerHTML = questions[questionCount].opt4;


function next() {
    if (questionCount < 9) {
        if (inp1.checked || inp2.checked || inp3.checked || inp4.checked) {
            questionCount++
            question.innerHTML = questions[questionCount].ques;
            opt1.innerHTML = questions[questionCount].opt1;
            opt2.innerHTML = questions[questionCount].opt2;
            opt3.innerHTML = questions[questionCount].opt3;
            opt4.innerHTML = questions[questionCount].opt4;
        }
        questionCount--
        var userAnswer;
        if (inp1.checked) {
            userAnswer = inp1.value
        }
        else if (inp2.checked) {
            userAnswer = inp2.value
        }
        else if (inp3.checked) {
            userAnswer = inp3.value
        }
        else if (inp4.checked) {
            userAnswer = inp4.value
        }
        // console.log(userAnswer)
        inp1.checked = false;
        inp2.checked = false;
        inp3.checked = false;
        inp4.checked = false;
        if (questions[questionCount].answer === userAnswer) {
            score++
            console.log("Your score is " + score)
        }
        console.log(questions[questionCount].answer,userAnswer)
    }
    questionCount++
    console.log(questionCount)
    if (questionCount === 10) {
                if (score > 6) {
                    greeting.innerHTML = "Congratulations Champ! You have passed this Test"
                    document.querySelector(".forDisplay").style.display = "none";
                    document.querySelector(".result").style.display = "block";
                }
                else if(score < 7){
                    greeting.innerHTML = "Oops! You Failed... Better Luck Next Time"
                    document.querySelector(".forDisplay").style.display = "none";
                    document.querySelector(".result").style.display = "block";
                }
                setTimeout(function(){
                    location.href = "../category.html"
                },2000)
    }

}

var finalScore;
var greeting = document.querySelector(".greet")

window.onkeydown = function(){
    if(event.keyCode = 13){
        next()
    }
}
var questions = [
    {
        ques: "Q1: Inside which HTML element do we put the JavaScript?",
        opt1: "&#60; script &#62;",
        opt2: "&#60; Javascript &#62;",
        opt3: "&#60; scripting &#62;",
        opt4: "&#60; js &#62;",
        answer: "opt1"
    },
    {
        ques: "Q2: What will be the output of the following JavaScript code? <br> <br> &#60;script&#62; <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; var js = 10 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; js*= 5; <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; console.log(js) <br> &#60;/script&#62;",
        opt1: "10",
        opt2: "5",
        opt3: '50',
        opt4: 'Error',
        answer: "opt3"
    },
    {
        ques: 'Q3: What will be the output of the following JavaScript code? <br> <br> function equalto() <br> { <br> &nbsp;&nbsp;&nbsp;&nbsp; var num = 10 <br> &nbsp;&nbsp;&nbsp;&nbsp; if(num === "10") <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return true; <br> &nbsp;&nbsp;&nbsp;&nbsp; else <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return false; <br> }' ,
        opt1: "compilation error",
        opt2: "false",
        opt3: "not defined",
        opt4: "true",
        answer: "opt2"
    },
    {
        ques: "Q4: What is the correct syntax for referring to an external script called 'xxx.js'?",
        opt1: " &#60;script.src = 'xxx.js'&#62;",
        opt2: 'class',
        opt3: 'font',
        opt4: 'style',
        answer: "opt4"
    },
    {
        ques: "Q5: The external JavaScript file must contain the &#60; script &#62; tag.",
        opt1: "True",
        opt2: "False",
        opt3: "Not necessary",
        opt4: "Don't Know",
        answer: "opt2"
    },
    {
        ques: "Q6: How do you write 'Hello World' in an alert box?",
        opt1: ' msgBox("Hello World");',
        opt2: ' msg("Hello World");',
        opt3: ' alertBox("Hello World");',
        opt4: ' alert("Hello World");',
        answer: "opt4"
    },
    {
        ques: "Q7: How do you create a function in JavaScript?",
        opt1: "function:myFunction()",
        opt2: "function myFunction()",
        opt3: 'function = myFunction()',
        opt4: 'All of these',
        answer: "opt1"
    },
    {
        ques: 'Q8: How do you call a function named "myFunction"?',
        opt1: 'call myFunction()',
        opt2: 'myFunction()',
        opt3: 'call function myFunction()',
        opt4: 'call = myFunction()',
        answer: "opt2"
    },
    {
        ques: "Q9: How to write an IF statement in JavaScript?",
        opt1: 'if i = 5',
        opt2: 'if i = 5 then',
        opt3: 'if i == 5 then',
        opt4: "if (i == 5)",
        answer: "opt4"
    },
    {
        ques: "Q10: How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        opt1: 'if i <> 5',
        opt2: 'if (i <> 5)',
        opt3: 'if (i != 5)',
        opt4: "if i =! 5 then",
        answer: "opt3"
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
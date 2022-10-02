var questions = [
    {
        ques: "Q1: What is the full form of HTML?",
        opt1: "Hello Text Markup language",
        opt2: "Hyper Tells Markup Language",
        opt3: "Hyper Text Markup Language",
        opt4: "Hyper Text Makeup Language",
        answer: "opt3"
    },
    {
        ques: "Q2: Choose the correct HTML element for the largest heading?",
        opt1: "&#60;h1 &#62;&#60/h1&#62;",
        opt2: "&#60;head &#62;&#60/head&#62;",
        opt3: "&#60;heading &#62;&#60/heading&#62;",
        opt4: "&#60;b &#62;&#60/b&#62;",
        answer: "opt1"
    },
    {
        ques: "Q3: Who is making the Web standards?",
        opt1: "Microsoft",
        opt2: "Mozilla",
        opt3: "Google",
        opt4: "The World Wide Web Consortium",
        answer: "opt4"
    },
    {
        ques: "Q4: What is the correct HTML element for inserting a line break?",
        opt1: "&#60;br &#62;",
        opt2: "&#60;hr &#62;&#60/hr&#62;",
        opt3: "&#60;lb &#62;&#60/lb&#62;",
        opt4: "&#60;break &#62;&#60/break&#62;",
        answer: "opt1"
    },
    {
        ques: "Q5: What is the correct HTML for adding a background color?",
        opt1: "&#60;background &#62; yellow &#60;background&#62;",
        opt2: '&#60;body bg="yellow" &#62;',
        opt3: '&#60;body style="background-color:yellow;" &#62;',
        opt4: "&#60;bg &#62; yellow &#60/bg&#62;",
        answer: "opt3"
    },
    {
        ques: "Q6: Choose the correct HTML element to define important text",
        opt1: "&#60; b &#62;",
        opt2: '&#60; strong &#62;',
        opt3: '&#60; i &#62;',
        opt4: "&#60; important &#62;",
        answer: "opt2"
    },
    {
        ques: "Q7: Which character is used to indicate an end tag?",
        opt1: "/",
        opt2: '&#60;',
        opt3: '&#62;',
        opt4: "$",
        answer: "opt1"
    },
    {
        ques: "Q8: How can you open a link in a new tab/browser window?",
        opt1: '&#60; a href="url" new /&#62;',
        opt2: '&#60; a href="url" target="_blank"  /&#62;',
        opt3: '&#60; a href="url" target="new"  /&#62;',
        opt4: '&#60; a href="url" target="_neWindow"  /&#62;',
        answer: "opt2"
    },
    {
        ques: "Q9: Which of these elements are all &#60; table &#62; elements?",
        opt1: '&#60; table &#62; &#60; head &#62; &#60; tfoot &#62;',
        opt2: '&#60; table &#62; &#60; tr &#62; &#60; tt &#62;',
        opt3: '&#60; thead &#62; &#60; body &#62; &#60; tr &#62;',
        opt4: '&#60; table &#62; &#60; td &#62; &#60; tr &#62;',
        answer: "opt4"
    },
    {
        ques: "Q10: Inline elements are normally displayed without starting a new line.",
        opt1: 'True',
        opt2: 'False',
        opt3: 'Maybe',
        opt4: "Don't know",
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
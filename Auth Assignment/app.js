
let emailSignup = document.getElementById("emailSignup");
let passwordSignup = document.getElementById("passwordSignup");
let emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
let passwordValidation = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
let loginEMailAuth;
let loginPassAuth;


window.onkeydown = function(){
    if(event.keyCode === 13 && check === "signup"){
        signup()
    }
    else if(event.keyCode === 13 && check === "login"){
        login()
    }
}

// var check;
// console.log(window.location.href)
// if(window.location.pathname === "sign-up.html"){
//     check = "signup";
// }
// else if(window.location.pathname === "index.html"){
//     check = "login"
// }
// else if(window.location.href === "https://quiz-app-by-taha.netlify.app/"){
//     check = "login"
// }
// console.log(check)

function goToLogin(){
    window.location = "index.html"
}
function gotoSignup(){
    window.location = "sign-up.html"
}

var htmlImg = document.querySelector(".html")
var cssImg = document.querySelector(".css")
var jsImg = document.querySelector(".js")

function htmlQuiz(){
    location.href = "html quiz/html-quiz.html"
}
function cssQuiz(){
    location.href = "css quiz/index.html"
}
function jsQuiz(){
    location.href = "js quiz/index.html"
}

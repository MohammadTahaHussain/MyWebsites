import { app } from "./firebaseconfig.js";
import { db } from "./firebaseconfig.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const auth = getAuth(app);
// const db = getDatabase();

let emailSignup = document.getElementById("emailSignup");
let passwordSignup = document.getElementById("passwordSignup");

// email verification function
let emailVerifyBtn = document.getElementById("verify-email");
let functionStatus = document.getElementById("status")
if(emailVerifyBtn){
emailVerifyBtn.addEventListener("click" , async function verifyEmail(){
  try{
    await sendEmailVerification(auth.currentUser);
  console.log('please check your email address and confirm.')
  functionStatus.innerHTML = `Verification Link has been sent to your email`
}catch(e){
  // console.log(`error===> ${e}`)
  // console.log(e)
  functionStatus.innerHTML = `${e.code}`
}

})
}

// let signupBtn = document.getElementById("signup-btn")
let signupBtn = document.querySelector("#signup-btn");
if (signupBtn) {
  signupBtn.addEventListener("click", () => {
    let email = emailSignup.value;
    let password = passwordSignup.value;
    createUserWithEmailAndPassword(
      auth,
      emailSignup.value,
      passwordSignup.value
    )
      .then(async(userCredential) => {
        const user = userCredential.user;
        const userUid = user.uid
        await addDoc (collection(db, "users"), {
          email: emailSignup.value,
          password: passwordSignup.value,
          userUid: userUid
        });
        emailSignup.value = "";
        passwordSignup.value = "";

        // swal("Succesfully Registered: Now Enjoy the Quiz");
        setTimeout(() => {
          window.location = "./verify.html";
        }, 1500);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, "==> eeror code");
        console.log(errorMessage, "==> eeror message");
        swal(`${errorCode}`);
      });
  });
}
let emailLogin = document.getElementById("emailLogin");
let passwordLogin = document.getElementById("passwordLogin");
let loginBtn = document.getElementById("login-btn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    signInWithEmailAndPassword(auth, emailLogin.value, passwordLogin.value)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.emailVerified == true) {
          window.location.pathname = "./category.html"
        } else {
          console.log("Not Verified");
        }
        // window.location = "category.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        swal(`${errorCode}`);
      });
    emailLogin.value = "";
    passwordLogin.value = "";
  });
}


// SignOut Function

let SignoutBtn = document.querySelector("button.logout")
if(SignoutBtn){
  SignoutBtn.addEventListener("click" , () => {
    signOut(auth).then(() => {
    
     }).catch((error) => {
       console.log(error);
     });
  })
}


if(window.location.pathname !== "/index.html" && window.location.pathname !== "/sign-up.html" && location.pathname !== "/recovery.html"){
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      if(user.emailVerified == false && window.location.pathname !== "/verify.html"){
        window.location.pathname = "/verify.html"
        // console.log(1)
      }
      // ...
    } else {
      // User is signed out
      // ...
      if(window.location.pathname == "/html%20quiz/html-quiz.html"){
        window.location = "../index.html"
      }
      else if(window.location.pathname == "/css%20quiz/index.html"){
        window.location = "../index.html"
      }
      else if(window.location.pathname == "/js%20quiz/index.html"){
        window.location = "../index.html"
      }
      else {window.location = "index.html";}
    }
  });
}

// if User is Signend In He Will Return to Category.html

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // console.log(user.emailVerified)
    if(user.emailVerified == true && location.pathname == "/index.html" || location.pathname == "" || location.pathname == "/"){
      
      window.location = "category.html"
    }
    }
    // ...
});


// function for checking user has done verification or not

// setInterval(() => {
//   if(window.location.pathname == "/verify.html"){
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         const uid = user.uid;
//         // console.log(user.emailVerified)
//         if(user.emailVerified == true){
//           window.location = "category.html"
//           console.log("hehe")
//         }
//         }
//         // ...
//     });
//   }
// },2000)

  if(window.location.pathname == "/verify.html"){
    onAuthStateChanged(auth, (user) => {
      if (user && user.emailVerified == true) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // console.log(user.emailVerified)

          window.location.pathname = "/category.html"
        }
        // ...
    });
  }


// JS For Recovery

let recoveryBtn = document.getElementById("recovery-btn")
let recoveryEmail = document.getElementById("emailRecovery")
if(recoveryBtn){
  recoveryBtn.addEventListener("click" , async () =>{
    try{
     await sendPasswordResetEmail(auth, recoveryEmail.value)
     swal("Password reset Link Has Been Sent To Your Email")
     setTimeout(() =>{
      window.location.pathname = ""
     })
    }catch(e){
      console.log(e)
    }
  })
  recoveryEmail.value = ""
}


// For Console User

onAuthStateChanged(auth, user =>{
  if(user){
    console.log(user)
  }
  else{
    console.log("Not found")
  }
})
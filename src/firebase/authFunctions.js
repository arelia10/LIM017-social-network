import { app } from "./firebaseConfig.js";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { onNavigate } from '../main.js';
import { db } from "./firebaseConfig.js";

const auth = getAuth();

export const registerWithEmail = (loginEmail,loginPassword) => {
//console.log(loginEmail,loginPassword)
createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    onNavigate('/');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    //console.log(errorMessage)
    //onNavigate('/');
  });
};

export const signInWithEmail = (loginEmail,loginPassword) => {
return signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    onNavigate('/login');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const wrongMessage = "contraseña incorrecta";
    console.log(wrongMessage)
  });
};

export const loginGoogle = () => {
const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    onNavigate('/login');
    return user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    onNavigate('/login');
  });
};

import { app } from "./firebaseConfig.js";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { onNavigate } from '../main.js';

const auth = getAuth();

export const registerWithEmail = (loginEmail,loginPassword) => {
//console.log(loginEmail,loginPassword)
createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    // Signed in
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

export const signInWithEmail = (loginEmail,loginPassword) => {
return signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    onAuthStateChanged(auth, (user) => {
        const correctEmail = user.correctEmail;
        const uid = user.uid;
        if (correctEmail) {
          console.log("hola")
          onNavigate('/login');
        }
        else {
          onNavigate('/');
        }
});
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });
};

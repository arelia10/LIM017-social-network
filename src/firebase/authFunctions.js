import { app } from "./firebaseConfig.js";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { onNavigate } from '../main.js';
import { db } from "./firebaseConfig.js";

const auth = getAuth();

export const registerWithEmail = (loginEmail,loginPassword) => {
//console.log(loginEmail,loginPassword)
const auth = getAuth();
 return createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
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
    return errorMessage;
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
/* Función para iniciar sesión con Google*/
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

export const signInWithEmail = (loginEmail,loginPassword,alertEmail) => {
  const auth1 =  getAuth();
 signInWithEmailAndPassword(auth1, loginEmail, loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    onAuthStateChanged(auth1, (user) => {
        const correctEmail = user.correctEmail;
        const uid = user.uid;
        if (correctEmail) {
          
          onNavigate('/');
        }
        else {
          wrongEmail.innerText = 'Verifique su email';
        }
});
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    switch (errorCode) {
      case 'auth/user-not-found':
        wrongEmail.innerText = 'No existe usuario registrado con ese correo';
        break;
      case 'auth/wrong-password':
        wrongEmail.innerText = 'La contraseña no es válida, intente de nuevo.';
        break;
      case 'auth/internal-error':
        wrongEmail.innerText = 'Digite correctamente su contraseña';
        break;
      case 'auth/invalid-email':
        wrongEmail.innerText = 'Digite correctamente su correo y contraseña';
        break;
      case 'auth/email-already-exists':
        wrongEmail.innerText = 'Este correo ya esta registrado, intente de nuevo.';
        break;
      default:
        wrongEmail.innerText = errorCode;
    }
  });
return result;
};

import { app } from "./firebaseConfig.js";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { onNavigate } from '../main.js';
//import { db } from "./firebaseConfig.js";

const auth = getAuth();
export const db = getFirestore();

export const registerWithEmail = (loginEmail, loginPassword, loginName) => {
  createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
   .then(() => {
   try {
    const RegisterTellMe =  addDoc(collection(db, "RegisterTellMe"), {
      newNickName:loginName,
      newEmail:loginEmail,
    });
    console.log("Registro realizado ", RegisterTellMe.nickName);

  }
  catch (e){
    console.error("Error, no se pudo registrar ", e);
  }
})
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     alert("errorMessage");
   });

//console.log(loginEmail,loginPassword)
/*createUserWithEmailAndPassword(auth,loginEmail,loginPassword)
  .then((userCredential) => {
    try {
    const RegisterTellMe = addDoc(collection(db,"RegisterTellMe"), {
      nickName:nickName,
      email:loginEmail,
    });
    console.log("Registro realizado");
    const user = userCredential.user;
    console.log(user)
    onNavigate('/');
  }
  catch (e){
  console.error("Error, no se pudo registrar", e);
  }})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    //console.log(errorMessage)
    //onNavigate('/');
  });*/
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

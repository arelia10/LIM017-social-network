import { onNavigate } from '../main.js';

export const Login= () =>{
  let LoginDiv= document.createElement("section");
    LoginDiv.innerHTML = /*html*/
    `<section  class="ac">
<div>
    <img class="isotype" src="./img/iconUser.svg">
    <p> User 1234 </p>
    
     <button id="loginOutBtn"><img class="loginOutIcon" src="./img/iconoLoginOutBl.svg"></button>
     
    </div >

    </section>`


  let buttonLogin= document.createElement("button");

  buttonLogin.textContent="Cerrar sesión";
  buttonLogin.addEventListener('click', () => onNavigate('/'));
  let containerLogin=document.createElement("div")
  containerLogin.innerHTML = /*html*/
    `<section>
    <p id="wel" class="w">¡Bienvenid@!</p>
    <main class="conta">
      </main>

    </section>`

  LoginDiv.appendChild(buttonLogin);
  LoginDiv.appendChild(containerLogin);
 


  return LoginDiv;
};

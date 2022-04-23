import { onNavigate } from '../main.js';

export const Login= () =>{
  let LoginDiv= document.createElement("section");
    LoginDiv.innerHTML = `<section>

    </section>`


  let buttonLogin= document.createElement("button");

  buttonLogin.textContent="Cerrar sesión";
  buttonLogin.addEventListener('click', () => onNavigate('/'));

  LoginDiv.appendChild(buttonLogin);



  return LoginDiv;
};

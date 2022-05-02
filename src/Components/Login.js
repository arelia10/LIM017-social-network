import { onNavigate } from '../main.js';
import { savePost, getPost } from '../firebase/authFunctions.js';

export const Login = () => {
  const LoginMain = document.createElement('main');
  LoginMain.innerHTML = `<header id="backgroundHeader">
        <img class="isotype" src="./img/iconUser.svg">
          <div>
            <input type="text" id="nickNameHeader" class="infoRegisterHeader">
          </div>
        <button id="loginOutBtn"><img class="loginOutIcon" src="./img/iconoLoginOut.svg"></button>
  </header>

  <!--Container post de user -->
  <br>
  <section id="postContainer">
    <form id="postForm">
      <div id="postUser" class="postUserStyle">
        <textarea placeholder="Desahógate..." type="text" id="txtUserPost" class="userInfoPost"></textarea>
      </div>
        <div>
          <button id="buttonPost">Publicar</button>
          <button id="buttonEdit">Editar</button>
          <button id="buttonTrash"><img class="buttonTrashStyle" src="./img/iconTrash.svg"></button>
       </div>
    </form>
  </section>`

  LoginMain.classList.add('loginMain');
  LoginMain.querySelector('#loginOutBtn').addEventListener('click', () => onNavigate('/'));

  const postForm = document.getElementById('postForm')
  //const tittleNameUser = document.getElementById('nickNameHeader')

/*postForm.addEventListener('click', (e) => {
    e.preventDefault()

    const NameUser = postForm['txtUserPost']
    console.log(NameUser)
  })*/

  LoginMain.querySelector('#buttonPost').addEventListener('click', (e) => {
      e.preventDefault()
      const contentUserPost = document.getElementById('txtUserPost').value;
      const eraser = document.getElementById('postForm').reset();
      savePost(contentUserPost)
      //const postUser = postForm['txtUserPost']
      console.log(contentUserPost)
    //  console.log('enviando')
  });

  return LoginMain;
};
